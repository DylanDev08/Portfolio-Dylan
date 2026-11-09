import { useEffect, useState } from "react";

export function ProjectGallery({ project }) {
  const items = [
    ...(project.coverImage ? [{
      src: project.coverImage,
      fallback: project.coverFallback,
      label: project.coverLabel || "Vista principal",
      description: project.previewNote || "Imagen de presentación del proyecto.",
    }] : []),
    ...(project.galleryItems || []),
  ];
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(() => new Set());

  useEffect(() => {
    setIndex(0);
    setFailed(new Set());
  }, [project.title]);

  if (items.length === 0) return null;

  const activeIndex = Math.min(index, items.length - 1);
  const active = items[activeIndex];
  const src = failed.has(active.src) && active.fallback ? active.fallback : active.src;
  const isBroken = failed.has(src);
  const select = (next) => setIndex((next + items.length) % items.length);

  return (
    <section className="section project-case-gallery-section" id="evidencia" aria-labelledby="project-gallery-title">
      <div className="container">
        <div className="project-case-section-heading">
          <span className="eyebrow">Evidencia visual</span>
          <h2 id="project-gallery-title">Así se ve el proyecto.</h2>
          <p>Capturas y recursos visuales publicados. Cada imagen indica qué muestra; las imágenes de catálogo y las vistas conceptuales no se presentan como pantallas funcionales.</p>
        </div>
        <div className="project-case-gallery">
          <figure className="project-case-gallery__stage">
            <div className="project-case-gallery__image">
              {isBroken ? (
                <div className="project-case-gallery__unavailable" role="status">Vista temporalmente no disponible.</div>
              ) : (
                <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Abrir imagen: ${active.label}`}>
                  <img
                    key={src}
                    src={src}
                    alt={active.description}
                    loading="lazy"
                    decoding="async"
                    onError={() => setFailed((previous) => new Set(previous).add(src))}
                  />
                  <span className="project-case-gallery__open">Ampliar imagen ↗</span>
                </a>
              )}
            </div>
            <figcaption>
              <div>
                <strong>{active.label}</strong>
                <p>{active.description}</p>
              </div>
              <span className="project-case-gallery__counter" aria-live="polite">{activeIndex + 1} / {items.length}</span>
            </figcaption>
          </figure>
          {items.length > 1 && (
            <div className="project-case-gallery__controls">
              <div className="project-case-gallery__nav">
                <button type="button" onClick={() => select(activeIndex - 1)} aria-label="Imagen anterior">←</button>
                <button type="button" onClick={() => select(activeIndex + 1)} aria-label="Imagen siguiente">→</button>
              </div>
              <div className="project-case-gallery__thumbnails" role="group" aria-label="Elegir imagen de la galería">
                {items.map((item, itemIndex) => (
                  <button
                    type="button"
                    key={`${item.src}-${itemIndex}`}
                    className={itemIndex === activeIndex ? "is-active" : ""}
                    aria-label={`Mostrar ${item.label}`}
                    aria-pressed={itemIndex === activeIndex}
                    onClick={() => select(itemIndex)}
                  >
                    <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                    <strong>{item.label}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
