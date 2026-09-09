import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";

export function ContactPage() {
  const { data } = usePortfolio();
  const { profile } = data;

  const contactLinks = [
    { label: "GitHub", href: profile.githubUrl, value: "Repositorios y proyectos públicos" },
    { label: "LinkedIn", href: profile.linkedinUrl, value: "Perfil profesional" },
    { label: "WhatsApp", href: profile.whatsappUrl, value: profile.phone },
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    { label: "CV", href: "/cv/CV_Dylan_Salcedo.pdf", value: "Descargar currículum" },
    { label: "Código de este portfolio", href: profile.portfolioUrl || profile.githubUrl, value: "Repositorio Portfolio-Dylan" },
  ];

  return (
    <PageShell>
      <section className="section contact-showcase" id="contacto">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Hablemos del problema antes de hablar de la herramienta.</h1>
          <p>
            Estoy abierto a oportunidades laborales, colaboraciones y proyectos donde una web, sistema, automatización
            o mejora de datos pueda simplificar un proceso real.
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
