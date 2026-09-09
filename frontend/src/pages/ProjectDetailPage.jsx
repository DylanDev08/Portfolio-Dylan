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
  const evidenceCount = [hasLive, hasGithub, hasDocs || true].filter(Boolean).length;
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
                    Abrir proyecto
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
                <span className="eyebrow">Problema</span>
                <h2>Qué necesitaba resolverse.</h2>
                <p>{project.problem}</p>
              </section>

              <section className="project-case-block">
                <span className="eyebrow">Solución</span>
                <h2>Qué desarrollé para resolverlo.</h2>
                <p>{project.solution}</p>
              </section>

              <section className="project-case-block">
                <span className="eyebrow">Impacto</span>
                <h2>Qué mejora aporta la solución.</h2>
                <p>{project.value}</p>
              </section>

              {!hasGithub && project.repositoryNote && (
                <section className="project-case-block project-case-block--platform">
                  <span className="eyebrow">Repositorio</span>
                  <h2>Por qué no hay un repositorio público.</h2>
                  <p>{project.repositoryNote}</p>
                </section>
              )}

              {project.deploymentNote && (
                <section className="project-case-block project-case-block--note">
                  <span className="eyebrow">Estado actual</span>
                  <h2>Qué falta o qué está en revisión.</h2>
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
                {hasLive ? <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Web publicada ↗</a> : <span>Web: sin demo pública</span>}
                {hasGithub ? <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">Repositorio GitHub ↗</a> : <span>Repositorio: no público / no aplica</span>}
                {hasDocs ? <a href={project.docsUrl} target="_blank" rel="noreferrer noopener">{project.docsLabel || "Documentación"} ↗</a> : <a href="#documentacion-caso">Documentación del caso ↓</a>}
              </div>

              <div className="project-case-panel">
                <span className="eyebrow">Evidencia</span>
                <strong>{evidenceCount} recurso{evidenceCount === 1 ? "" : "s"} para revisar</strong>
                <p>La portada usa material real del proyecto o una captura de su web. Los accesos disponibles se muestran de forma explícita, sin inventar repositorios o demos.</p>
              </div>

              <div className="project-case-panel">
                <span className="eyebrow">Estado</span>
                <strong>{project.statusLabel}</strong>
                <p>
                  {project.status === "in-development"
                    ? "Proyecto en evolución. El código o la demo pueden cambiar mientras se corrigen diseño, validaciones y funcionalidad."
                    : project.status === "repo-only"
                      ? "Repositorio disponible para revisar arquitectura, código y documentación; todavía no se presenta una demo pública."
                      : "Proyecto con una versión pública disponible para revisión."}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section--alt project-case-next">
          <div className="container project-case-next__inner">
            <div>
              <span className="eyebrow">Más proyectos</span>
              <h2>Seguí revisando problemas, decisiones y soluciones.</h2>
            </div>
            <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
