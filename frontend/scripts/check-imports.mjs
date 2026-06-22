import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if ([".js", ".jsx"].includes(extname(path))) files.push(path);
  }
  return files;
}

const files = await walk(fileURLToPath(new URL("../src", import.meta.url)));
for (const file of files) await readFile(file, "utf8");
console.log(`Import check: ${files.length} archivos leídos correctamente.`);
