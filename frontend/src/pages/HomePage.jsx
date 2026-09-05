import { Link } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { HeroSection } from "../features/profile/components/HeroSection";

export function HomePage() {
  const { data } = usePortfolio();
  const featuredProjects = data.projects.slice(0, 3);
  const featuredServices = data.services.slice(0, 3);

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
              <span className="eyebrow">Trabajo verificable</span>
              <h2>Proyectos donde el foco está en el resultado.</h2>
              <p>Una selección breve de proyectos con demo, repositorio o documentación pública para que se pueda revisar qué problema abordan y cómo están construidos.</p>
            </div>

            <div className="featured-projects-grid">
              {featuredProjects.map((project) => (
                <article className="featured-project" key={project.id}>
                  <div>
                    <span className="featured-project__status">{project.statusLabel}</span>
                    <h3>{project.title}</h3>
                    <p>{project.value}</p>
                  </div>
                  <div className="featured-project__actions">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Ver proyecto</a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </section>

        <section className="section section--alt home-process">
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
