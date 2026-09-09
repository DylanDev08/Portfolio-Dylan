import { Link, Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ProjectVisual } from "../features/projects/components/ProjectVisual";
import { projectPresentationFor } from "../features/projects/data/projectPresentation";
import { projectSlug } from "../features/projects/utils/projectSlug";

function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { data } = usePortfolio();
  const rawProject = data.projects.find((item) => projectSlug(item.title) === slug);

  if (!rawProject) {
    return <Navigate to="/404" replace />;
  }

  const project = projectPresentationFor(rawProject);
  const hasLive = isValidUrl(project.liveUrl);
  const hasGithub = isValidUrl(project.githubUrl);
  const hasDocs = isValidUrl(project.docsUrl);
  const evidenceCount = 1 + Number(hasLive) + Number(hasGithub);
  const themeStyle = {
    "--project-accent": project.accent,
    "--project-accent-rgb": project.accentRgb,
    "--project-surface": project.surface,
  };

  return (
    <PageShell>
      <div className="project-case" style={themeStyle}>
        <section className="project-case-hero">
          <div className="container project-case-hero__grid">
            <div className="project-case-hero__copy">
              <Link className="project-back" to="/proyectos">← Volver a proyectos</Link>
              <div className="project-case-meta">
                <span>{project.statusLabel}</span>
                {project.category && <span>{project.category}</span>}
                {project.sourceType && <span>{project.sourceType}</span>}
              </div>
              <h1>{project.title}</h1>
              <p>{project.value || project.solution || project.problem}</p>

              <div className="project-case-actions">
                {hasLive && (
                  <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                    Abrir producto
                  </a>
                )}
                {hasGithub && (
                  <a className="button button--secondary" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    Ver repositorio
                  </a>
                )}
                {hasDocs ? (
                  <a className="button button--ghost" href={project.docsUrl} target="_blank" rel="noreferrer noopener">
                    {project.docsLabel || "Leer documentación"}
                  </a>
                ) : (
                  <a className="button button--ghost" href="#documentacion-caso">Documentación del caso</a>
                )}
              </div>
            </div>

            <div className="project-case-hero__visual">
              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <section className="section project-case-content" id="documentacion-caso">
          <div className="container project-case-layout">
            <article className="project-case-main">
              <section className="project-case-block">
                <span className="eyebrow">Necesidad</span>
                <h2>Qué problema debía resolver el producto.</h2>
                <p>{project.problem}</p>
              </section>

              <section className="project-case-block">
                <span className="eyebrow">Solución</span>
                <h2>Cómo está planteada la solución.</h2>
                <p>{project.solution}</p>
              </section>

              <section className="project-case-block">
                <span className="eyebrow">Valor</span>
                <h2>Qué aporta a la operación, la venta o la experiencia.</h2>
                <p>{project.value}</p>
              </section>

              {!hasGithub && project.repositoryNote && (
                <section className="project-case-block project-case-block--platform">
                  <span className="eyebrow">Implementación</span>
                  <h2>Cómo está construido este proyecto.</h2>
                  <p>{project.repositoryNote}</p>
                </section>
              )}

              {project.deploymentNote && (
                <section className="project-case-block project-case-block--note">
                  <span className="eyebrow">Evolución del producto</span>
                  <h2>Alcance actual y próximas capacidades.</h2>
                  <p>{project.deploymentNote}</p>
                </section>
              )}
            </article>

            <aside className="project-case-aside">
              <div className="project-case-panel">
                <span className="eyebrow">Tecnologías</span>
                <div className="badges project-case-tech">
                  {(project.technologies || []).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-case-panel project-case-panel--resources">
                <span className="eyebrow">Accesos</span>
                {hasLive ? <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Producto publicado ↗</a> : <span>Acceso público no disponible</span>}
                {hasGithub ? <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">Repositorio GitHub ↗</a> : <span>Repositorio: no público / no aplica</span>}
                {hasDocs ? <a href={project.docsUrl} target="_blank" rel="noreferrer noopener">{project.docsLabel || "Documentación"} ↗</a> : <a href="#documentacion-caso">Documentación del caso ↓</a>}
              </div>

              <div className="project-case-panel">
                <span className="eyebrow">Recursos</span>
                <strong>{evidenceCount} recurso{evidenceCount === 1 ? "" : "s"} para conocer la solución</strong>
                <p>La ficha reúne material real del proyecto, acceso al producto cuando existe, repositorio público cuando corresponde y documentación del trabajo realizado.</p>
              </div>

              <div className="project-case-panel">
                <span className="eyebrow">Estado</span>
                <strong>{project.statusLabel}</strong>
                <p>
                  {project.status === "in-development"
                    ? "Producto con desarrollo activo y una base técnica definida para incorporar nuevas capacidades de forma progresiva."
                    : project.status === "repo-only"
                      ? "Caso técnico con arquitectura, código y documentación disponibles para revisión."
                      : "Producto con una versión pública disponible y recursos asociados para conocer su implementación."}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section--alt project-case-next">
          <div className="container project-case-next__inner">
            <div>
              <span className="eyebrow">Más soluciones</span>
              <h2>Conocé otros proyectos, productos y casos de desarrollo.</h2>
            </div>
            <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
