import { Link, Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { projectSlug } from "../features/projects/utils/projectSlug";

function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { data } = usePortfolio();
  const project = data.projects.find((item) => projectSlug(item.title) === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const hasLive = isValidUrl(project.liveUrl);
  const hasGithub = isValidUrl(project.githubUrl);
  const hasDocs = isValidUrl(project.docsUrl);
  const evidenceCount = [hasLive, hasGithub, hasDocs].filter(Boolean).length;

  return (
    <PageShell>
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
              {hasDocs && (
                <a className="button button--ghost" href={project.docsUrl} target="_blank" rel="noreferrer noopener">
                  Leer documentación
                </a>
              )}
            </div>
          </div>

          <div className="project-case-hero__visual">
            <img
              src={project.coverImage}
              alt={`Portada visual del proyecto ${project.title}`}
              width="1200"
              height="675"
            />
          </div>
        </div>
      </section>

      <section className="section project-case-content">
        <div className="container project-case-layout">
          <article className="project-case-main">
            <section className="project-case-block">
              <span className="eyebrow">Contexto</span>
              <h2>El problema antes de la tecnología.</h2>
              <p>{project.problem}</p>
            </section>

            <section className="project-case-block">
              <span className="eyebrow">Solución</span>
              <h2>Qué construí y por qué.</h2>
              <p>{project.solution}</p>
            </section>

            <section className="project-case-block">
              <span className="eyebrow">Valor</span>
              <h2>Qué mejora aporta.</h2>
              <p>{project.value}</p>
            </section>

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

            <div className="project-case-panel">
              <span className="eyebrow">Evidencia</span>
              <strong>{evidenceCount} recurso{evidenceCount === 1 ? "" : "s"} verificable{evidenceCount === 1 ? "" : "s"}</strong>
              <p>
                Los enlaces de esta ficha apuntan solo a recursos públicos existentes. Si una demo no está operativa, no se presenta como publicada.
              </p>
            </div>

            <div className="project-case-panel">
              <span className="eyebrow">Estado</span>
              <strong>{project.statusLabel}</strong>
              <p>
                {project.status === "in-development"
                  ? "Proyecto en evolución. El código o la demo pueden cambiar mientras se corrigen diseño, validaciones y funcionalidad."
                  : project.status === "repo-only"
                    ? "Repositorio disponible para revisar arquitectura, código y documentación."
                    : "Proyecto con una versión pública disponible para revisión."}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--alt project-case-next">
        <div className="container project-case-next__inner">
          <div>
            <span className="eyebrow">Siguiente proyecto</span>
            <h2>Seguí revisando cómo planteo distintas soluciones.</h2>
          </div>
          <Link className="button button--secondary" to="/proyectos">Ver todos los proyectos</Link>
        </div>
      </section>
    </PageShell>
  );
}
