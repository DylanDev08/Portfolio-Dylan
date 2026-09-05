import { Link } from "react-router-dom";
import { projectSlug } from "../utils/projectSlug";

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
      <Link className="project-card__media" to={detailUrl} aria-label={`Ver caso de estudio de ${project.title}`}>
        <img
          src={project.coverImage || "/projects/portfolio-fzac.svg"}
          alt={`Portada de ${project.title}`}
          loading="lazy"
          width="960"
          height="540"
        />
        <span className="project-card__status">{cardStatus}</span>
      </Link>

      <div className="project-card__body">
        <div className="project-meta">
          {project.category && <span>{project.category}</span>}
          {project.sourceType && <span>{project.sourceType}</span>}
        </div>

        <h3 className="project-card__title"><Link to={detailUrl}>{project.title}</Link></h3>
        <p className="project-card__problem">{project.problem}</p>

        {project.value && (
          <div className="project-card__value">
            <strong>Qué aporta</strong>
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
          <Link className="button button--primary" to={detailUrl}>Ver caso</Link>
          {canOpenProject && (
            <a className="button button--secondary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              Demo
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
