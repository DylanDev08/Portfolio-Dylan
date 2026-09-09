import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { HeroSection } from "../features/profile/components/HeroSection";
import { ProjectVisual } from "../features/projects/components/ProjectVisual";
import { projectSlug } from "../features/projects/utils/projectSlug";
import { WorkflowPrototype } from "../features/automation/components/WorkflowPrototype";

const featuredProjectNames = ["Materiales FZAC", "Portfolio FZAC", "FuckTheSys", "Innova Click"];
const stackGroups = [
  { id: "FRONTEND", label: "Frontend" },
  { id: "BACKEND", label: "Backend" },
  { id: "DATABASE", label: "Datos" },
  { id: "TOOLS", label: "Herramientas" },
];

export function HomePage() {
  const { data } = usePortfolio();
  const featuredProjects = featuredProjectNames
    .map((name) => data.projects.find((project) => project.title === name))
    .filter(Boolean);
  const featuredServices = data.services.slice(0, 3);
  const featuredAutomations = data.workflows.slice(0, 2);
  const venture = data.venture;

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header />
      <main id="main-content">
        <HeroSection profile={data.profile} />

        <section className="section section--compact home-solutions">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Servicios</span>
              <h2>Soluciones para vender mejor, ordenar la operación y ahorrar trabajo manual.</h2>
              <p>Primero identifico el cuello de botella. Después diseño una solución web, integración o automatización que tenga sentido para el negocio.</p>
            </div>

            <div className="solution-grid">
              {featuredServices.map((service) => (
                <article className="solution-card" key={service.id}>
                  <span>{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <strong>{service.result}</strong>
                  {service.url && (
                    <a className="solution-card__cta" href={service.url} target="_blank" rel="noreferrer noopener">{service.ctaLabel || "Consultar"} ↗</a>
                  )}
                </article>
              ))}
            </div>

            <Link className="text-link" to="/servicios">Ver todas las soluciones →</Link>
          </div>
        </section>

        {venture && (
          <section className="section section--alt home-venture">
            <div className="container venture-card">
              <div className="venture-card__copy">
                <span className="eyebrow">{venture.eyebrow}</span>
                <h2>{venture.name}</h2>
                <h3>{venture.headline}</h3>
                <p>{venture.description}</p>
                <div className="venture-services" aria-label="Servicios de ADTech">
                  {venture.services.map((service) => <span key={service}>{service}</span>)}
                </div>
              </div>
              <div className="venture-card__actions">
                <a className="button button--primary" href={venture.whatsappUrl} target="_blank" rel="noreferrer noopener">Consultar por ADTech</a>
                <a className="button button--secondary" href={venture.instagramUrl} target="_blank" rel="noreferrer noopener">Instagram {venture.handle}</a>
                <a className="button button--ghost" href={venture.tiktokUrl} target="_blank" rel="noreferrer noopener">TikTok</a>
              </div>
            </div>
          </section>
        )}

        <section className="section home-featured-projects">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Proyectos</span>
              <h2>Proyectos reales con acceso directo, repositorio y vista del resultado.</h2>
              <p>Las portadas se generan desde los sitios publicados o usan assets reales del proyecto. En los desarrollos con código público, GitHub queda a un clic.</p>
            </div>

            <div className="home-project-view-grid">
              {featuredProjects.map((project) => {
                const caseUrl = `/proyectos/${projectSlug(project.title)}`;
                return (
                  <article className="home-project-view" key={project.id}>
                    <ProjectVisual project={project} compact />
                    <div className="home-project-view__copy">
                      <div className="project-meta">
                        <span>{project.sourceType}</span>
                        <span>{project.statusLabel}</span>
                      </div>
                      <h3><Link to={caseUrl}>{project.title}</Link></h3>
                      <p><strong>Problema:</strong> {project.problem}</p>
                      <p className="home-project-view__value">{project.value}</p>
                      <div className="featured-project__actions">
                        <Link to={caseUrl}>Ver desarrollo</Link>
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Abrir proyecto</a>}
                        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </section>

        <section className="section section--alt home-stack">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Habilidades</span>
              <h2>Stack visible y fácil de escanear.</h2>
              <p>Las tecnologías están agrupadas por función y respaldadas por proyectos, no por porcentajes autodeclarados.</p>
            </div>

            <div className="home-stack-grid">
              {stackGroups.map((group) => {
                const groupSkills = data.skills.filter((skill) => skill.category === group.id);
                return (
                  <article className="home-stack-card" key={group.id}>
                    <span>{group.label}</span>
                    <div className="home-stack-card__skills">
                      {groupSkills.map((skill) => <strong key={skill.id}>{skill.name}</strong>)}
                    </div>
                  </article>
                );
              })}
            </div>

            <Link className="text-link" to="/skills">Ver habilidades completas →</Link>
          </div>
        </section>

        <section className="section home-automation">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Workflows</span>
              <h2>Prototipos de procesos, no archivos copiables.</h2>
              <p>Muestro cómo pienso el flujo y qué problema resuelve, sin publicar credenciales, JSON, tokens ni configuraciones importables.</p>
            </div>

            <div className="home-workflow-grid">
              {featuredAutomations.map((automation) => (
                <article className="home-workflow-card" key={automation.id}>
                  <span>{automation.category}</span>
                  <h3>{automation.title}</h3>
                  <WorkflowPrototype title={automation.title} steps={automation.steps} />
                  <p><strong>Resultado:</strong> {automation.result}</p>
                </article>
              ))}
            </div>

            <Link className="text-link" to="/automatizaciones">Ver todos los workflows →</Link>
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
