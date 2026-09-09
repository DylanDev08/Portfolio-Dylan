function domainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Proyecto";
  }
}

function handleImageError(event, fallback) {
  const image = event.currentTarget;
  if (fallback && image.dataset.fallbackApplied !== "true") {
    image.dataset.fallbackApplied = "true";
    image.src = fallback;
    return;
  }
  image.closest(".project-preview__viewport")?.classList.add("project-preview__viewport--missing");
  image.remove();
}

export function ProjectVisual({ project, compact = false }) {
  const hasLive = Boolean(project.liveUrl);
  const preferStableCover = project.title === "Portfolio FZAC" && Boolean(project.coverFallback);
  const coverSource = preferStableCover ? project.coverFallback : project.coverImage;
  const coverFallback = preferStableCover ? project.coverImage : project.coverFallback;
  const hasCover = Boolean(coverSource);

  return (
    <div className={`project-preview ${compact ? "project-preview--compact" : ""} ${!hasLive ? "project-preview--repository" : ""}`}>
      <div className="project-preview__browser" aria-hidden="true">
        <span />
        <span />
        <span />
        <small>{hasLive ? domainFromUrl(project.liveUrl) : project.statusLabel}</small>
      </div>

      {hasCover ? (
        <div className="project-preview__viewport">
          <img
            src={coverSource}
            alt={`Vista de ${project.title}`}
            loading="lazy"
            width="1200"
            height="675"
            onError={(event) => handleImageError(event, coverFallback)}
          />
          {hasLive && (
            <a
              className="project-preview__overlay"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Abrir ${project.title} en una pestaña nueva`}
            />
          )}
        </div>
      ) : (
        <div className="project-preview__repo-content">
          <span className="eyebrow">{project.statusLabel}</span>
          <strong>{project.title}</strong>
          <p>{project.previewNote || "La demo pública no está disponible. La evidencia del desarrollo está en GitHub y su documentación."}</p>
          <div className="badges">
            {(project.technologies || []).slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      )}

      <div className="project-preview__caption">
        <span>{preferStableCover ? "Imagen real del proyecto" : hasLive ? "Captura actual del proyecto" : "Vista del desarrollo"}</span>
        {hasLive ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Abrir sitio ↗</a>
        ) : project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">Abrir GitHub ↗</a>
        ) : null}
      </div>
    </div>
  );
}
