import { Link } from "react-router-dom";
import { projectPresentationFor } from "../data/projectPresentation";
import { projectSlug } from "../utils/projectSlug";
import { ProjectVisual } from "./ProjectVisual";

function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectCard({ project }) {
  const displayProject = projectPresentationFor(project);
  const canOpenProject = isValidUrl(displayProject.liveUrl) && !displayProject.locked;
  const canOpenGithub = isValidUrl(displayProject.githubUrl) && !displayProject.locked;
  const canOpenDocs = isValidUrl(displayProject.docsUrl) && !displayProject.locked;
  const cardStatus = displayProject.statusLabel || (canOpenProject ? "Publicado" : "Repo disponible");
  const detailUrl = `/proyectos/${projectSlug(displayProject.title)}`;
  const technologies = displayProject.technologies || [];
  const visibleTechnologies = technologies.slice(0, 4);
  const hiddenTechnologies = Math.max(0, technologies.length - visibleTechnologies.length);
  const themeStyle = {
    "--project-accent": displayProject.accent,
    "--project-accent-rgb": displayProject.accentRgb,
    "--project-surface": displayProject.surface,
  };

  return (
    <article className="project-card" style={themeStyle}>
      <div className="project-card__media project-card__media--live">
        <ProjectVisual project={displayProject} compact />
        <span className="project-card__status">{cardStatus}</span>
      </div>

      <div className="project-card__body">
        <div className="project-meta">
          {displayProject.category && <span>{displayProject.category}</span>}
          {displayProject.sourceType && <span>{displayProject.sourceType}</span>}
        </div>

        <h3 className="project-card__title"><Link to={detailUrl}>{displayProject.title}</Link></h3>
        <p className="project-card__problem"><strong>Problema</strong>{displayProject.problem}</p>

        {displayProject.value && (
          <div className="project-card__value">
            <strong>Qué resuelve</strong>
            <span>{displayProject.value}</span>
          </div>
        )}

        <div className="badges project-card__badges" aria-label={`Tecnologías principales de ${displayProject.title}`}>
          {visibleTechnologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
          {hiddenTechnologies > 0 && <span>+{hiddenTechnologies}</span>}
        </div>

        <div className="project-resources" aria-label={`Accesos de ${displayProject.title}`}>
          {canOpenProject ? (
            <a href={displayProject.liveUrl} target="_blank" rel="noreferrer noopener"><small>Web</small><strong>Abrir proyecto ↗</strong></a>
          ) : (
            <span className="project-resource--muted"><small>Web</small><strong>Sin demo pública</strong></span>
          )}

          {canOpenGithub ? (
            <a href={displayProject.githubUrl} target="_blank" rel="noreferrer noopener"><small>Repositorio</small><strong>GitHub ↗</strong></a>
          ) : (
            <span className="project-resource--muted" title={displayProject.repositoryNote}><small>Repositorio</small><strong>No público / no aplica</strong></span>
          )}

          {canOpenDocs ? (
            <a href={displayProject.docsUrl} target="_blank" rel="noreferrer noopener"><small>Documentación</small><strong>{displayProject.docsLabel || "Abrir docs"} ↗</strong></a>
          ) : (
            <Link to={detailUrl}><small>Documentación</small><strong>{displayProject.docsLabel || "Ver caso"} →</strong></Link>
          )}
        </div>

        <div className="project-actions">
          <Link className="button button--primary" to={detailUrl}>Ver caso completo</Link>
        </div>
      </div>
    </article>
  );
}
