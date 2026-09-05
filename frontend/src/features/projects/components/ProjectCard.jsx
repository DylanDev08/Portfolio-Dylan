import { Link } from "react-router-dom";
import { projectSlug } from "../utils/projectSlug";

function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectCard({ project }) {
  const canOpenProject = isValidUrl(project.liveUrl) && !project.locked;
  const canOpenGithub = isValidUrl(project.githubUrl) && !project.locked;
  const canOpenDocs = isValidUrl(project.docsUrl) && !project.locked;
  const cardStatus = project.statusLabel || (canOpenProject ? "Publicado" : "Repo disponible");
  const detailUrl = `/proyectos/${projectSlug(project.title)}`;

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
        <div className="project-card__header">
          <div>
            <div className="project-meta">
              {project.category && <span>{project.category}</span>}
              {project.sourceType && <span>{project.sourceType}</span>}
            </div>
            <h3><Link to={detailUrl}>{project.title}</Link></h3>
          </div>
        </div>

        <div className="project-story">
          {project.problem && (
            <section>
              <strong>Problema</strong>
              <p>{project.problem}</p>
            </section>
          )}
          {project.solution && (
            <section>
              <strong>Solución</strong>
              <p>{project.solution}</p>
            </section>
          )}
          {project.value && (
            <section>
              <strong>Valor</strong>
              <p>{project.value}</p>
            </section>
          )}
        </div>

        {project.deploymentNote && <p className="project-note">{project.deploymentNote}</p>}

        <div className="badges" aria-label={`Tecnologías de ${project.title}`}>
          {(project.technologies || []).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
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
          {canOpenDocs && !canOpenGithub && (
            <a className="button button--ghost" href={project.docsUrl} target="_blank" rel="noreferrer noopener">
              Documentación
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
