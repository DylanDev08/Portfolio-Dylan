function isAvailableUrl(url) {
  return Boolean(url) && url !== "#";
}

export function ShowcaseCard({ item }) {
  const canOpen = isAvailableUrl(item.url);
  const isExternal = item.url?.startsWith("http");

  return (
    <article className="showcase-card">
      <div className="showcase-card__cover">
        <img
          src={item.coverImage || "/resources/web-apps.svg"}
          alt={`Portada de ${item.title}`}
          loading="lazy"
          width="960"
          height="540"
        />
        {item.statusLabel && <span>{item.statusLabel}</span>}
      </div>

      <div className="showcase-card__body">
        <div className="showcase-card__header">
          <small>{item.category}</small>
          <h3>{item.title}</h3>
        </div>

        <p>{item.description}</p>

        {item.result && (
          <div className="showcase-card__result">
            <strong>Resultado</strong>
            <span>{item.result}</span>
          </div>
        )}

        <div className="badges">
          {(item.tools || []).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        {canOpen && (
          <a
            className="github-button"
            href={item.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
          >
            {item.ctaLabel || "Ver recurso"}
          </a>
        )}
      </div>
    </article>
  );
}
