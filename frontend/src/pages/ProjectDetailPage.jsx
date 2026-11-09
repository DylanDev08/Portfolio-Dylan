import { Link, Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ProjectVisual } from "../features/projects/components/ProjectVisual";
import { ProjectGallery } from "../features/projects/components/ProjectGallery";
import { projectPresentationFor } from "../features/projects/data/projectPresentation";
import { projectSlug } from "../features/projects/utils/projectSlug";

function isValidUrl(url) {
  return typeof url === "string" && /^https:\/\//i.test(url);
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { data } = usePortfolio();
  const rawProject = data.projects.find((item) => item.title !== "Mangas MaxDy" && projectSlug(item.title) === slug);

  if (!rawProject) return <Navigate to="/404" replace />;

  const project = projectPresentationFor(rawProject);
  const hasLive = isValidUrl(project.liveUrl);
  const hasGithub = isValidUrl(project.githubUrl);
  const hasDocs = isValidUrl(project.docsUrl);
  const related = data.projects
    .filter((item) => item.title !== "Mangas MaxDy" && item.title !== project.title && item.portfolioSection === project.portfolioSection)
    .slice(0, 2);
  const themeStyle = {
    "--project-accent": project.accent,
    "--project-accent-rgb": project.accentRgb,
    "--project-surface": project.surface,
  };

  return (
    <PageShell>
      <div className="project-case project-case--editorial" style={themeStyle}>
        <section className="project-case-hero">
          <div className="container project-case-hero__grid">
            <div className="project-case-hero__copy">
              <Link className="project-back" to="/proyectos">← Todos los proyectos</Link>
              <div className="project-case-meta">
                <span>{project.statusLabel}</span>
                {project.category && <span>{project.category}</span>}
              </div>
              <h1>{project.title}</h1>
              <p>{project.value || project.solution || project.problem}</p>
              <div className="project-case-actions">
                <a className="button button--primary" href="#resumen">Explorar el caso ↓</a>
                {hasLive && <a className="button button--secondary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver sitio ↗</a>}
                {hasGithub && <a className="button button--ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Repositorio ↗</a>}
              </div>
            </div>
            <div className="project-case-hero__visual">
              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <nav className="project-case-jump" aria-label="Navegación del caso">
          <div className="container project-case-jump__inner">
            <a href="#resumen">Resumen</a>
            <a href="#evidencia">Galería</a>
            {(project.decisions || []).length > 0 && <a href="#ingenieria">Decisiones técnicas</a>}
            <a href="#ficha-tecnica">Ficha técnica</a>
          </div>
        </nav>

        <section className="section project-case-summary" id="resumen" aria-labelledby="project-summary-title">
          <div className="container">
            <div className="project-case-section-heading">
              <span className="eyebrow">El proyecto en contexto</span>
              <h2 id="project-summary-title">Del problema a la solución.</h2>
              {project.role && <p><strong>Mi participación:</strong> {project.role}</p>}
            </div>
            <div className="project-case-summary__grid">
              <article>
                <span>01 / Necesidad</span>
                <h3>Qué había que resolver</h3>
                <p>{project.problem}</p>
              </article>
              <article>
                <span>02 / Desarrollo</span>
                <h3>Qué construí</h3>
                <p>{project.solution}</p>
              </article>
              <article>
                <span>03 / Valor</span>
                <h3>Qué aporta</h3>
                <p>{project.value}</p>
              </article>
            </div>
            {project.deploymentNote && (
              <p className="project-case-summary__note"><strong>Estado actual:</strong> {project.deploymentNote}</p>
            )}
          </div>
        </section>

        <ProjectGallery project={project} />

        {(project.decisions || []).length > 0 && (
          <section className="section project-case-engineering" id="ingenieria" aria-labelledby="project-engineering-title">
            <div className="container">
              <div className="project-case-section-heading">
                <span className="eyebrow">Pensamiento de ingeniería</span>
                <h2 id="project-engineering-title">Decisiones detrás del desarrollo.</h2>
                <p>Enfoques que elegí para el problema y la etapa del producto, sin inventar cifras de rendimiento ni funcionalidades que siguen en desarrollo.</p>
              </div>
              <div className="project-case-engineering__grid">
                {project.decisions.map((item, index) => (
                  <article key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section project-case-specs" id="ficha-tecnica" aria-labelledby="project-specs-title">
          <div className="container project-case-specs__grid">
            <div>
              <span className="eyebrow">Implementación</span>
              <h2 id="project-specs-title">Ficha técnica y alcance.</h2>
              {(project.architecture || []).length > 0 && (
                <div className="project-case-specs__group">
                  <h3>Arquitectura y componentes</h3>
                  <div className="badges project-case-tech">{project.architecture.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              )}
              {(project.technologies || []).length > 0 && (
                <div className="project-case-specs__group">
                  <h3>Tecnologías</h3>
                  <div className="badges project-case-tech">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              )}
              {(project.highlights || []).length > 0 && (
                <div className="project-case-specs__group">
                  <h3>Capacidades</h3>
                  <div className="badges project-case-tech">{project.highlights.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              )}
            </div>

            <aside className="project-case-specs__aside">
              <div className="project-case-panel">
                <span className="eyebrow">Estado</span>
                <strong>{project.statusLabel || "Caso de estudio"}</strong>
                <p>Las capturas y descripciones representan el alcance documentado; no certifican disponibilidad de servicios ni métricas comerciales.</p>
              </div>
              {project.repositoryNote && !hasGithub && (
                <div className="project-case-panel">
                  <span className="eyebrow">Repositorio</span>
                  <p>{project.repositoryNote}</p>
                </div>
              )}
              <div className="project-case-panel project-case-panel--resources">
                <span className="eyebrow">Comprobar el proyecto</span>
                {hasLive && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visitar el producto ↗</a>}
                {hasGithub && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Consultar código en GitHub ↗</a>}
                {hasDocs && <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">{project.docsLabel || "Consultar documentación"} ↗</a>}
                {!hasLive && !hasGithub && !hasDocs && <p>Este caso documenta el trabajo realizado; no hay recursos externos públicos.</p>}
              </div>
            </aside>
          </div>
        </section>

        <section className="section section--alt project-case-next">
          <div className="container">
            <div className="project-case-next__inner">
              <div>
                <span className="eyebrow">Seguí explorando</span>
                <h2>Más proyectos y soluciones.</h2>
              </div>
              <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
            </div>
            {related.length > 0 && (
              <div className="project-case-related">
                {related.map((item) => (
                  <Link key={item.title} to={`/proyectos/${projectSlug(item.title)}`}>
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                    <span>Ver caso →</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
