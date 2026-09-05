function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectCard({ project }) {
  const canOpenProject = isValidUrl(project.liveUrl) && !project.locked;
  const canOpenGithub = isValidUrl(project.githubUrl) && !project.locked;
  const canOpenDocs = isValidUrl(project.docsUrl) && !project.locked;
  const cardStatus = project.statusLabel || (canOpenProject ? "Publicado" : "Repo disponible");

  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          src={project.coverImage || "/projects/portfolio-fzac.svg"}
          alt={`Portada de ${project.title}`}
          loading="lazy"
          width="960"
          height="540"
        />
        <span className="project-card__status">{cardStatus}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <div>
            <div className="project-meta">
              {project.category && <span>{project.category}</span>}
              {project.sourceType && <span>{project.sourceType}</span>}
            </div>
            <h3>{project.title}</h3>
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
          {canOpenProject && (
            <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              Ver proyecto
            </a>
          )}
          {canOpenGithub && (
            <a className="button button--secondary" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          )}
          {canOpenDocs && (
            <a className="button button--ghost" href={project.docsUrl} target="_blank" rel="noreferrer noopener">
              Documentación
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
