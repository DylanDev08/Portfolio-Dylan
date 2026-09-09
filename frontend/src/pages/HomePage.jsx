import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { HeroSection } from "../features/profile/components/HeroSection";
import { ProjectVisual } from "../features/projects/components/ProjectVisual";
import { projectSlug } from "../features/projects/utils/projectSlug";

const featuredProjectNames = ["Materiales FZAC", "Portfolio FZAC", "Innova Click"];

const routeCards = [
  {
    eyebrow: "Trabajo realizado",
    title: "Proyectos",
    description: "Casos reales con problema, solución, resultado, vista, demo y GitHub cuando corresponde.",
    to: "/proyectos",
    cta: "Ver proyectos",
  },
  {
    eyebrow: "Qué puedo resolver",
    title: "Servicios",
    description: "Web, e-commerce, sistemas internos, automatizaciones e integraciones según la necesidad del negocio.",
    to: "/servicios",
    cta: "Ver servicios",
  },
  {
    eyebrow: "Stack aplicado",
    title: "Habilidades",
    description: "Frontend, backend, bases de datos, automatización y herramientas organizadas por función.",
    to: "/skills",
    cta: "Ver habilidades",
  },
  {
    eyebrow: "Procesos",
    title: "Automatización",
    description: "Prototipos visuales que muestran cómo reduzco pasos manuales, errores y pérdida de información.",
    to: "/automatizaciones",
    cta: "Ver workflows",
  },
];

export function HomePage() {
  const { data } = usePortfolio();
  const featuredProjects = featuredProjectNames
    .map((name) => data.projects.find((project) => project.title === name))
    .filter(Boolean);
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
              <span className="eyebrow">Explorar portfolio</span>
              <h2 id="home-routing-title">Entrá directo a lo que querés revisar.</h2>
              <p>La Home funciona como punto de entrada. El contenido completo vive en páginas separadas para que sea más rápido encontrar proyectos, servicios, habilidades o automatizaciones.</p>
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
              <span className="eyebrow">Selección</span>
              <h2 id="featured-projects-title">Tres proyectos para entender rápido cómo trabajo.</h2>
              <p>La Home muestra solo una selección. Cada caso tiene su propia URL con contexto, solución, resultado y accesos directos.</p>
            </div>

            <div className="home-project-teaser-grid">
              {featuredProjects.map((project) => {
                const caseUrl = `/proyectos/${projectSlug(project.title)}`;
                return (
                  <article className="home-project-teaser" key={project.id}>
                    <ProjectVisual project={project} compact />
                    <div className="home-project-teaser__body">
                      <div className="project-meta">
                        <span>{project.sourceType}</span>
                        <span>{project.statusLabel}</span>
                      </div>
                      <h3><Link to={caseUrl}>{project.title}</Link></h3>
                      <p>{project.value}</p>
                      <Link className="text-link" to={caseUrl}>Abrir caso →</Link>
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
              <h2 id="profile-links-title">Más contexto, sin cargar la Home.</h2>
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
              <span className="eyebrow">Proyecto o necesidad</span>
              <h2>Contame qué hoy te hace perder tiempo, ventas o control.</h2>
              <p>La conversación empieza por el problema. Después vemos si la mejor respuesta es una web, sistema, e-commerce, automatización o integración.</p>
            </div>
            <a className="button button--primary" href={`${data.profile.whatsappUrl}?text=${encodeURIComponent("Hola Dylan, vi tu portfolio y quiero evaluar una solución para mi proyecto o negocio.")}`} target="_blank" rel="noreferrer noopener">Hablar por WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
