import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { HeroSection } from "../features/profile/components/HeroSection";
import { ProjectVisual } from "../features/projects/components/ProjectVisual";
import { projectSlug } from "../features/projects/utils/projectSlug";

const featuredProjectNames = ["Materiales FZAC", "Portfolio FZAC", "Factdesi", "NovaClick"];

export function HomePage() {
  const { data } = usePortfolio();
  const featuredProjects = featuredProjectNames
    .map((name) => data.projects.find((project) => project.title === name))
    .filter(Boolean);
  const featuredServices = data.services.slice(0, 3);
  const featuredAutomations = data.workflows.slice(0, 3);

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header />
      <main id="main-content">
        <HeroSection profile={data.profile} />

        <section className="section section--compact home-solutions">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Qué resuelvo</span>
              <h2>La tecnología tiene sentido cuando mejora un proceso.</h2>
              <p>Trabajo desde la necesidad: primero entiendo dónde se pierde tiempo, información o claridad; después diseño la solución.</p>
            </div>

            <div className="solution-grid">
              {featuredServices.map((service) => (
                <article className="solution-card" key={service.id}>
                  <span>{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <strong>{service.result}</strong>
                </article>
              ))}
            </div>

            <Link className="text-link" to="/servicios">Ver todos los servicios →</Link>
          </div>
        </section>

        <section className="section home-featured-projects">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Proyectos con vista</span>
              <h2>No portadas de ejemplo: la vista real del trabajo.</h2>
              <p>Cuando un proyecto está publicado, el portfolio muestra directamente su sitio dentro de una vista de navegador. Cuando no hay demo pública, lo indico y dejo la evidencia disponible en GitHub.</p>
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

        <section className="section section--alt home-automation">
          <div className="container">
            <div className="home-section-heading">
              <span className="eyebrow">Automatizaciones</span>
              <h2>Automatizo problemas operativos, no archivos JSON.</h2>
              <p>Estas son situaciones concretas donde una integración, un flujo o una validación puede reducir trabajo manual y pérdida de información.</p>
            </div>

            <div className="home-automation-grid">
              {featuredAutomations.map((automation) => (
                <article className="home-automation-card" key={automation.id}>
                  <span>{automation.category}</span>
                  <h3>{automation.title}</h3>
                  <div>
                    <strong>Problema</strong>
                    <p>{automation.problem}</p>
                  </div>
                  <div>
                    <strong>Resultado</strong>
                    <p>{automation.result}</p>
                  </div>
                </article>
              ))}
            </div>

            <Link className="text-link" to="/automatizaciones">Ver automatizaciones y soluciones →</Link>
          </div>
        </section>

        <section className="section home-process">
          <div className="container process-grid">
            <div className="home-section-heading">
              <span className="eyebrow">Forma de trabajo</span>
              <h2>Entender, ordenar, construir y documentar.</h2>
            </div>
            <ol className="process-list">
              <li><strong>01</strong><span>Entiendo el problema y el flujo actual.</span></li>
              <li><strong>02</strong><span>Defino una solución simple antes de sumar complejidad.</span></li>
              <li><strong>03</strong><span>Construyo una interfaz clara y una base técnica mantenible.</span></li>
              <li><strong>04</strong><span>Documento lo necesario para que el proyecto pueda continuar.</span></li>
            </ol>
          </div>
        </section>

        <section className="section home-cta">
          <div className="container home-cta__inner">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2>¿Tenés un proceso que hoy es más complicado de lo que debería?</h2>
              <p>Podemos convertirlo en una herramienta web, automatización, dashboard o flujo más claro.</p>
            </div>
            <Link className="button button--primary" to="/contacto">Hablemos</Link>
          </div>
        </section>
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
