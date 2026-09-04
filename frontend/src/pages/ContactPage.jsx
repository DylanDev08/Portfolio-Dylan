import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";

export function ContactPage() {
  const { data } = usePortfolio();
  const { profile } = data;

  const contactLinks = [
    { label: "GitHub", href: profile.githubUrl, value: "Repositorios y codigo" },
    { label: "LinkedIn", href: profile.linkedinUrl, value: "Perfil profesional" },
    { label: "WhatsApp", href: profile.whatsappUrl, value: profile.phone },
    { label: "Gmail", href: `mailto:${profile.email}`, value: profile.email },
    { label: "CV", href: "/cv/CV_Dylan_Salcedo.pdf", value: "Descargar curriculum" },
    { label: "Portfolio en GitHub", href: profile.portfolioUrl || profile.githubUrl, value: "Repositorio del portfolio" },
  ];

  return (
    <PageShell>
      <section className="section contact-showcase" id="contacto">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Hablemos de una web, app, automatizacion o sistema.</h1>
          <p>
            Estoy abierto a oportunidades laborales, colaboraciones y proyectos donde pueda aportar desarrollo web,
            automatizaciones, dashboards, documentacion y mejoras de procesos.
          </p>

          <div className="contact-links-grid">
            {contactLinks.map((link) => (
              <a key={link.label} className="contact-link-card" href={link.href || "#"} target={link.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">
                <strong>{link.label}</strong>
                <span>{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
