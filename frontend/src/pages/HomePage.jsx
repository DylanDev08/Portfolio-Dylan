import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { HeroSection } from "../features/profile/components/HeroSection";
import { ProjectVisual } from "../features/projects/components/ProjectVisual";
import { projectPresentationFor } from "../features/projects/data/projectPresentation";
import { projectSlug } from "../features/projects/utils/projectSlug";

const featuredProjectNames = ["Materiales FZAC", "Portfolio FZAC", "Innova Click"];

const routeCards = [
  {
    eyebrow: "Trabajo realizado",
    title: "Proyectos",
    description: "Casos reales con problema, solución, impacto, acceso al producto y documentación técnica cuando corresponde.",
    to: "/proyectos",
    cta: "Ver proyectos",
  },
  {
    eyebrow: "Soluciones para negocios",
    title: "Servicios",
    description: "Desarrollo web, e-commerce, sistemas internos, automatizaciones e integraciones orientadas a resultados concretos.",
    to: "/servicios",
    cta: "Ver servicios",
  },
  {
    eyebrow: "Capacidad técnica",
    title: "Habilidades",
    description: "Frontend, backend, bases de datos, automatización y herramientas aplicadas a productos y operaciones reales.",
    to: "/skills",
    cta: "Ver habilidades",
  },
  {
    eyebrow: "Eficiencia operativa",
    title: "Automatización",
    description: "Flujos para conectar atención, datos y operación, reducir tareas manuales y mejorar el seguimiento.",
    to: "/automatizaciones",
    cta: "Ver soluciones",
  },
];

export function HomePage() {
  const { data } = usePortfolio();
  const featuredProjects = featuredProjectNames
    .map((name) => data.projects.find((project) => project.title === name))
    .filter(Boolean)
    .map(projectPresentationFor);
  const venture = data.venture;

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header />
      <main id="main-content">
        <HeroSection profile={data.profile} />

        <section className="section section--compact home-routing" aria-labelledby="home-routing-title">
          <div className="container">
            <div className="home-section-heading home-section-heading--compact">
              <span className="eyebrow">Soluciones, productos y experiencia</span>
              <h2 id="home-routing-title">Elegí qué necesitás resolver o qué querés revisar.</h2>
              <p>El portfolio está organizado por áreas para que clientes, empresas y equipos técnicos puedan encontrar rápido servicios, proyectos, capacidades y soluciones de automatización.</p>
            </div>

            <div className="route-card-grid">
              {routeCards.map((item) => (
                <Link className="route-card" to={item.to} key={item.to}>
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>{item.cta} →</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt home-featured-projects" aria-labelledby="featured-projects-title">
          <div className="container">
            <div className="home-section-heading home-section-heading--compact">
              <span className="eyebrow">Casos destacados</span>
              <h2 id="featured-projects-title">Proyectos que muestran cómo convierto una necesidad en una solución.</h2>
              <p>Cada caso incluye contexto, decisiones, resultado, portada real y accesos directos al producto, repositorio o documentación cuando están disponibles.</p>
            </div>

            <div className="home-project-teaser-grid">
              {featuredProjects.map((project) => {
                const caseUrl = `/proyectos/${projectSlug(project.title)}`;
                const themeStyle = {
                  "--project-accent": project.accent,
                  "--project-accent-rgb": project.accentRgb,
                  "--project-surface": project.surface,
                };
                return (
                  <article className="home-project-teaser" key={project.id} style={themeStyle}>
                    <ProjectVisual project={project} compact />
                    <div className="home-project-teaser__body">
                      <div className="project-meta">
                        <span>{project.sourceType}</span>
                        <span>{project.statusLabel}</span>
                      </div>
                      <h3><Link to={caseUrl}>{project.title}</Link></h3>
                      <p>{project.value}</p>
                      <div className="home-project-teaser__links">
                        <Link to={caseUrl}>Ver caso →</Link>
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Web ↗</a>}
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">GitHub ↗</a>}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </section>

        {venture && (
          <section className="section home-venture-teaser" aria-labelledby="adtech-home-title">
            <div className="container venture-teaser">
              <div>
                <span className="eyebrow">{venture.eyebrow}</span>
                <h2 id="adtech-home-title">{venture.name}</h2>
                <h3>{venture.headline}</h3>
                <p>{venture.description}</p>
              </div>
              <div className="venture-teaser__actions">
                <Link className="button button--primary" to="/adtech">Conocer ADTech</Link>
                <a className="button button--secondary" href={venture.whatsappUrl} target="_blank" rel="noreferrer noopener">Consultar por WhatsApp</a>
              </div>
            </div>
          </section>
        )}

        <section className="section section--compact home-secondary-links" aria-labelledby="profile-links-title">
          <div className="container">
            <div className="home-section-heading home-section-heading--compact">
              <span className="eyebrow">Perfil profesional</span>
              <h2 id="profile-links-title">Experiencia, formación y documentación técnica.</h2>
            </div>
            <div className="profile-link-row">
              <Link to="/sobre-mi">Sobre mí</Link>
              <Link to="/experiencia">Experiencia</Link>
              <Link to="/formacion">Formación</Link>
              <Link to="/documentacion">Documentación</Link>
              <a href="/cv/CV_Dylan_Salcedo.pdf" download="CV_Dylan_Salcedo_ATS_2026.pdf">CV ATS 2026</a>
            </div>
          </div>
        </section>

        <section className="section home-cta">
          <div className="container home-cta__inner">
            <div>
              <span className="eyebrow">Desarrollo de soluciones</span>
              <h2>Convirtamos una necesidad concreta en una solución que aporte valor.</h2>
              <p>Puedo ayudarte a desarrollar una web, e-commerce, sistema interno, automatización o integración orientada a mejorar ventas, operación, atención o control de información.</p>
            </div>
            <a className="button button--primary" href={`${data.profile.whatsappUrl}?text=${encodeURIComponent("Hola Dylan, vi tu portfolio y quiero evaluar una solución para mi proyecto o negocio.")}`} target="_blank" rel="noreferrer noopener">Solicitar propuesta</a>
          </div>
        </section>
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
