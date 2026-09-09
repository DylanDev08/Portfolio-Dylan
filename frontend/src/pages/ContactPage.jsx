import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";

export function ContactPage() {
  const { data } = usePortfolio();
  const { profile, venture } = data;

  const contactLinks = [
    { label: "WhatsApp", href: `${profile.whatsappUrl}?text=${encodeURIComponent("Hola Dylan, vi tu portfolio y quiero consultarte por un proyecto.")}`, value: "Contame qué necesitás resolver" },
    { label: "ADTech", href: venture?.whatsappUrl, value: "Software, web y automatización" },
    { label: "GitHub", href: profile.githubUrl, value: "Repositorios y proyectos públicos" },
    { label: "LinkedIn", href: profile.linkedinUrl, value: "Perfil profesional" },
    { label: "Instagram ADTech", href: venture?.instagramUrl, value: venture?.handle || "@adtech.ros" },
    { label: "CV ATS 2026", href: "/cv/CV_Dylan_Salcedo.pdf", value: "Descargar currículum actualizado" },
  ].filter((link) => Boolean(link.href));

  return (
    <PageShell>
      <section className="section contact-showcase" id="contacto">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Hablemos del problema y del resultado que necesitás.</h1>
          <p>
            Trabajo en oportunidades laborales, proyectos y soluciones para negocios donde una web, sistema,
            e-commerce, automatización o mejora de datos pueda resolver un problema concreto.
          </p>

          <div className="contact-links-grid">
            {contactLinks.map((link) => {
              const isExternal = link.href?.startsWith("http");
              return (
                <a
                  key={link.label}
                  className="contact-link-card"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                >
                  <strong>{link.label}</strong>
                  <span>{link.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
