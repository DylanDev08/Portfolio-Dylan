import { Link } from "react-router-dom";
import { projectSlug } from "../utils/projectSlug";
import { ProjectVisual } from "./ProjectVisual";

function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectCard({ project }) {
  const canOpenProject = isValidUrl(project.liveUrl) && !project.locked;
  const canOpenGithub = isValidUrl(project.githubUrl) && !project.locked;
  const cardStatus = project.statusLabel || (canOpenProject ? "Publicado" : "Repo disponible");
  const detailUrl = `/proyectos/${projectSlug(project.title)}`;
  const technologies = project.technologies || [];
  const visibleTechnologies = technologies.slice(0, 4);
  const hiddenTechnologies = Math.max(0, technologies.length - visibleTechnologies.length);

  return (
    <article className="project-card">
      <div className="project-card__media project-card__media--live">
        <ProjectVisual project={project} compact />
        <span className="project-card__status">{cardStatus}</span>
      </div>

      <div className="project-card__body">
        <div className="project-meta">
          {project.category && <span>{project.category}</span>}
          {project.sourceType && <span>{project.sourceType}</span>}
        </div>

        <h3 className="project-card__title"><Link to={detailUrl}>{project.title}</Link></h3>
        <p className="project-card__problem"><strong>Problema:</strong> {project.problem}</p>

        {project.value && (
          <div className="project-card__value">
            <strong>Qué resuelve</strong>
            <span>{project.value}</span>
          </div>
        )}

        <div className="badges project-card__badges" aria-label={`Tecnologías principales de ${project.title}`}>
          {visibleTechnologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
          {hiddenTechnologies > 0 && <span>+{hiddenTechnologies}</span>}
        </div>

        <div className="project-actions">
          <Link className="button button--primary" to={detailUrl}>Ver desarrollo</Link>
          {canOpenProject && (
            <a className="button button--secondary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              Abrir proyecto
            </a>
          )}
          {canOpenGithub && (
            <a className="button button--ghost" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
