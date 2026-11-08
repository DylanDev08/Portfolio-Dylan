import { Link } from "react-router-dom";
import { projectPresentationFor } from "../data/projectPresentation";
import { projectSlug } from "../utils/projectSlug";
import { ProjectVisual } from "./ProjectVisual";

function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectCard({ project }) {
  const displayProject = projectPresentationFor(project);
  const detailUrl = `/proyectos/${projectSlug(displayProject.title)}`;
  const canOpenProject = isValidUrl(displayProject.liveUrl) && !displayProject.locked;
  const canOpenGithub = isValidUrl(displayProject.githubUrl) && !displayProject.locked;
  const technologies = (displayProject.technologies || []).slice(0, 4);
  const themeStyle = {
    "--project-accent": displayProject.accent,
    "--project-accent-rgb": displayProject.accentRgb,
    "--project-surface": displayProject.surface,
  };

  return (
    <article className="project-card project-card--editorial" style={themeStyle}>
      <div className="project-card__media project-card__media--live">
        <ProjectVisual project={displayProject} compact />
        <span className="project-card__status">{displayProject.statusLabel || "Caso técnico"}</span>
      </div>
      <div className="project-card__body">
        <div className="project-meta">
          {displayProject.category && <span>{displayProject.category}</span>}
          {displayProject.sourceType && <span>{displayProject.sourceType}</span>}
        </div>
        <h3 className="project-card__title"><Link to={detailUrl}>{displayProject.title}</Link></h3>
        {displayProject.role && <p className="project-card__role">{displayProject.role}</p>}
        <p className="project-card__summary">{displayProject.value || displayProject.solution || displayProject.problem}</p>
        {technologies.length > 0 && (
          <div className="badges project-card__badges" aria-label={`Tecnologías de ${displayProject.title}`}>
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        )}
        <div className="project-card__footer">
          <Link className="button button--primary" to={detailUrl}>Ver caso completo</Link>
          {canOpenProject && <a href={displayProject.liveUrl} target="_blank" rel="noopener noreferrer">Sitio web ↗</a>}
          {canOpenGithub && <a href={displayProject.githubUrl} target="_blank" rel="noopener noreferrer">Código ↗</a>}
        </div>
      </div>
    </article>
  );
}
