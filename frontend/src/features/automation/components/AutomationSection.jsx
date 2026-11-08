import { SectionTitle } from "../../../components/common/SectionTitle";

export function AutomationSection({ automations = [], repository }) {
  return (
    <section className="section automation-section" id="automatizaciones">
      <div className="container">
        <SectionTitle
          eyebrow="Automatización aplicada · n8n"
          title="Workflows diseñados para operaciones reales."
          description="Capturas reales de mis flujos: mensajería, validación de entradas y consolidación de reportes. La publicación del workflow no implica que todas sus integraciones estén activas en producción."
          headingLevel="h1"
        />

        <div className="adtech-workflow-grid">
          {automations.map((item) => (
            <article className="adtech-workflow-card" key={item.id}>
              <a
                className="adtech-workflow-media"
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir captura completa de ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt || `Workflow de n8n: ${item.title}`}
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="560"
                />
                <span className="adtech-workflow-media__zoom" aria-hidden="true">Ampliar captura ↗</span>
              </a>
              <div className="adtech-workflow-body">
                <span className="eyebrow">{item.category}</span>
                <h2>{item.title}</h2>
                <span className="adtech-workflow-status">{item.statusLabel}</span>
                <p className="adtech-workflow-caption">{item.imageCaption}</p>
                <p><strong>Necesidad:</strong> {item.problem}</p>
                <p><strong>Implementación:</strong> {item.solution}</p>
                <p><strong>Objetivo:</strong> {item.result}</p>
                {item.jsonUrl && (
                  <a className="adtech-workflow-json" href={item.jsonUrl} download>
                    Descargar JSON de arquitectura (sanitizado) ↓
                  </a>
                )}
                <small className="adtech-workflow-json-note">Diagrama de referencia: no ejecutable y sin datos internos.</small>
                <div className="badges">
                  {(item.tools || []).map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        {repository && (
          <aside className="automation-repository" aria-labelledby="automation-repository-title">
            <div className="automation-repository__copy">
              <span className="eyebrow">{repository.category}</span>
              <h2 id="automation-repository-title">{repository.title}</h2>
              <span className="adtech-workflow-status">{repository.statusLabel}</span>
              <p>{repository.description}</p>
              <p className="automation-repository__note">{repository.scopeNote}</p>
              <div className="badges">
                {(repository.tools || []).map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </div>
            <div className="automation-repository__access">
              <span>GitHub · {repository.repositoryVisibility === "private" ? "Repositorio privado" : "Repositorio público"}</span>
              <a
                className="button button--secondary"
                href={repository.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositorio ↗
              </a>
              {repository.repositoryVisibility === "private" && (
                <small>Solo usuarios con acceso autorizado pueden ver el código.</small>
              )}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
