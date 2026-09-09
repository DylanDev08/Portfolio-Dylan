function domainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Proyecto";
  }
}

export function ProjectVisual({ project, compact = false }) {
  const hasLive = Boolean(project.liveUrl);

  if (hasLive) {
    return (
      <div className={`project-preview ${compact ? "project-preview--compact" : ""}`}>
        <div className="project-preview__browser" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>{domainFromUrl(project.liveUrl)}</small>
        </div>
        <div className="project-preview__viewport">
          <iframe
            src={project.liveUrl}
            title={`Vista en vivo de ${project.title}`}
            loading="lazy"
            tabIndex="-1"
          />
          <a
            className="project-preview__overlay"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Abrir ${project.title} en una pestaña nueva`}
          />
        </div>
        <div className="project-preview__caption">
          <span>Vista real del proyecto</span>
          <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Abrir sitio ↗</a>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-preview project-preview--repository ${compact ? "project-preview--compact" : ""}`}>
      <div className="project-preview__browser" aria-hidden="true">
        <span />
        <span />
        <span />
        <small>Vista pública no disponible</small>
      </div>
      <div className="project-preview__repo-content">
        <span className="eyebrow">{project.statusLabel}</span>
        <strong>{project.title}</strong>
        <p>{project.previewNote || "El proyecto no tiene una demo pública operativa. La evidencia disponible es el repositorio y su documentación."}</p>
        <div className="badges">
          {(project.technologies || []).slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
      {project.githubUrl && (
        <div className="project-preview__caption">
          <span>Repositorio verificable</span>
          <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">Abrir GitHub ↗</a>
        </div>
      )}
    </div>
  );
}
