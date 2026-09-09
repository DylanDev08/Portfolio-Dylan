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
  const hasGithub = Boolean(project.githubUrl);
  const hasCover = Boolean(project.coverImage);
  const visualLink = hasLive ? project.liveUrl : hasGithub ? project.githubUrl : "";
  const coverStyle = {
    "--project-cover-position": project.coverPosition || "center top",
    "--project-cover-fit": project.coverFit || "cover",
    "--project-cover-bg": project.coverBackground || project.surface || "#07111f",
  };

  return (
    <div
      className={`project-preview ${compact ? "project-preview--compact" : ""} ${!hasLive ? "project-preview--repository" : ""}`}
      style={coverStyle}
    >
      <div className="project-preview__browser" aria-hidden="true">
        <span />
        <span />
        <span />
        <small>{hasLive ? domainFromUrl(project.liveUrl) : project.statusLabel}</small>
      </div>

      {hasCover ? (
        <div className="project-preview__viewport">
          <img
            src={project.coverImage}
            alt={`Portada de ${project.title}`}
            loading="lazy"
            width="1200"
            height="675"
            onError={(event) => handleImageError(event, project.coverFallback)}
          />
          {visualLink && (
            <a
              className="project-preview__overlay"
              href={visualLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${hasLive ? "Abrir" : "Revisar"} ${project.title} en una pestaña nueva`}
            />
          )}
        </div>
      ) : (
        <div className="project-preview__repo-content">
          <span className="eyebrow">{project.statusLabel}</span>
          <strong>{project.title}</strong>
          <p>{project.previewNote || "El acceso público no está disponible. El producto puede revisarse mediante su repositorio y documentación técnica."}</p>
          <div className="badges">
            {(project.technologies || []).slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      )}

      <div className="project-preview__caption">
        <span>{project.coverLabel || (hasLive ? "Producto publicado" : "Vista del producto")}</span>
        {hasLive ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">Abrir sitio ↗</a>
        ) : hasGithub ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">Abrir GitHub ↗</a>
        ) : null}
      </div>
    </div>
  );
}
