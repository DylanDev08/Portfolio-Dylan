import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const baseUrl = process.env.VISUAL_BASE_URL || "http://127.0.0.1:4173";
const output = "visual-artifacts";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const report = { baseUrl, checkedAt: new Date().toISOString(), cases: [], failures: [], warnings: [] };
async function check(name, fn) {
  try {
    const result = await fn();
    report.cases.push({ name, result: "passed", ...result });
    console.log("PASS", name);
  } catch (error) {
    report.failures.push({ name, reason: String(error?.message || error) });
    console.error("FAIL", name, String(error?.message || error));
  }
}
function assert(condition, message) { if (!condition) throw Error(message); }
const widths = [
  { name: "mobile-360", width: 360, height: 800 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1440", width: 1440, height: 900 },
];
const routes = [
  ["/", "inicio"],
  ["/proyectos", "proyectos"],
  ["/automatizaciones", "automatizaciones"],
  ["/adtech", "adtech"],
  ["/proyectos/portfolio-fzac", "portfolio-fzac"],
  ["/proyectos/materiales-fzac", "materiales-fzac"],
  ["/proyectos/viagelato", "viagelato"],
];
for (const device of widths) {
  const context = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    deviceScaleFactor: 1, reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error.message || error)));
  for (const [path, name] of routes) {
    await check(device.name + " " + path + ": content and width", async () => {
      errors.length = 0;
      const response = await page.goto(baseUrl + path, { waitUntil: "domcontentloaded", timeout: 25000 });
      assert(response?.status() === 200, "HTTP " + response?.status());
      await page.locator("main h1").first().waitFor({ timeout: 12000 });
      await page.waitForTimeout(300);
      const data = await page.evaluate(() => {
        const root = document.documentElement;
        const offenders = [];
        for (const selector of [".container", ".hero-actions", ".project-case-gallery__stage", ".project-case-actions", ".adtech-lead-form"]) {
          for (const node of document.querySelectorAll(selector)) {
            const r = node.getBoundingClientRect();
            if (r.width && (r.left < -3 || r.right > window.innerWidth + 3)) {
              offenders.push({ selector, text: node.textContent?.slice(0,40), left: Math.round(r.left), right: Math.round(r.right) });
            }
          }
        }
        return { width: window.innerWidth, scrollWidth: root.scrollWidth, offenders };
      });
      assert(errors.length === 0, "Page errors: " + errors.join("; "));
      assert(data.scrollWidth <= device.width + 3, "Horizontal overflow: " + data.scrollWidth + " vs " + device.width);
      assert(data.offenders.length === 0, "Clipped sections: " + JSON.stringify(data.offenders.slice(0, 4)));
      await page.screenshot({ path: join(output, device.name + "-" + name + ".png"), fullPage: true, animations: "disabled", timeout: 15000 });
      return { viewport: device.width, width: data.scrollWidth };
    });
  }
  await check(device.name + ": portfolio gallery controls", async () => {
    await page.goto(baseUrl + "/proyectos/portfolio-fzac", { waitUntil: "domcontentloaded" });
    const counter = page.locator(".project-case-gallery__counter");
    await counter.waitFor({ timeout: 10000 });
    assert((await counter.innerText()).trim() === "1 / 3", "Expected 3 gallery resources");
    await page.getByRole("button", { name: "Imagen siguiente" }).click();
    assert((await counter.innerText()).trim() === "2 / 3", "Next button did not change image");
    const pressed = await page.getByRole("button", { name: "Mostrar Galería de una obra" }).getAttribute("aria-pressed");
    assert(pressed === "true", "Selected thumbnail not announced");
    await page.getByRole("button", { name: "Imagen anterior" }).click();
    assert((await counter.innerText()).trim() === "1 / 3", "Previous button did not change image");
    return { controls: "previous, next, thumbnails" };
  });
  await check(device.name + ": valid clickable buttons", async () => {
    await page.goto(baseUrl + "/proyectos/viagelato", { waitUntil: "domcontentloaded" });
    const buttons = page.locator(".project-case-actions .button");
    assert(await buttons.count() >= 1, "Project case lacks call-to-action buttons");
    for (const button of await buttons.all()) {
      const box = await button.boundingBox();
      assert(box && box.width >= 44 && box.height >= 40, "Button too small (" + box?.width + "x" + box?.height + ")");
    }
    return { buttons: await buttons.count() };
  });
  if (device.width <= 768) {
    await check(device.name + ": mobile navigation", async () => {
      await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
      await page.getByRole("button", { name: "Abrir menú" }).click();
      assert(await page.getByRole("navigation", { name: "Navegación principal" }).isVisible(), "Mobile menu remains hidden");
      await page.getByRole("button", { name: "Cerrar menú" }).click();
      assert(!(await page.getByRole("navigation", { name: "Navegación principal" }).isVisible()), "Mobile menu did not close");
      return { menu: "open / close" };
    });
  }
  await context.close();
}
await browser.close();
await writeFile(join(output, "report.json"), JSON.stringify(report, null, 2) + "\n");
console.log("\nBrowser verification:", report.cases.length, "passed,", report.failures.length, "failed");
if (report.failures.length) process.exitCode = 1;
