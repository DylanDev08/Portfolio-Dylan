function isValidUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ProjectCard({ project }) {
  const canOpenProject = isValidUrl(project.liveUrl) && project.status !== "in-development" && !project.locked;
  const canOpenGithub = isValidUrl(project.githubUrl) && project.status !== "in-development" && !project.locked;
  const cardStatus = project.statusLabel || (canOpenProject ? "Publicado" : "No disponible");

  const CoverContent = (
    <>
      <img src={project.coverImage || "/projects/portfolio-fzac.svg"} alt={`Portada de ${project.title}`} />
      <span>{canOpenProject ? "Ver proyecto" : cardStatus}</span>
    </>
  );

  return (
    <article className={`project-card ${!canOpenProject ? "project-card--locked" : ""}`}>
      {canOpenProject ? (
        <a className="project-cover" href={project.liveUrl} target="_blank" rel="noreferrer noopener" aria-label={`Abrir proyecto ${project.title}`}>
          {CoverContent}
        </a>
      ) : (
        <div className="project-cover project-cover--locked" aria-label={`${project.title}: ${cardStatus}`}>
          {CoverContent}
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <small>{cardStatus}</small>
        </div>

        <div className="project-meta">
          {project.category && <span>{project.category}</span>}
          {project.sourceType && <span>{project.sourceType}</span>}
        </div>

        <p>{project.description}</p>
        <div className="badges">
          {(project.technologies || []).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {canOpenGithub ? (
          <a className="github-button" href={project.githubUrl} target="_blank" rel="noreferrer noopener">
            Ver en GitHub
          </a>
        ) : (
          <span className="github-button github-button--disabled" aria-disabled="true">
            {project.status === "in-development" || project.locked ? "Repositorio privado" : "Repositorio no disponible"}
          </span>
        )}
      </div>
    </article>
  );
}
