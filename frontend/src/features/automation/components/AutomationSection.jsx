import { SectionTitle } from "../../../components/common/SectionTitle";
import { WorkflowPrototype } from "./WorkflowPrototype";

export function AutomationSection({ automations }) {
  return (
    <section className="section automation-section" id="automatizaciones">
      <div className="container">
        <SectionTitle
          eyebrow="Automatizaciones"
          title="Workflows pensados desde el problema que resuelven."
          description="Muestro prototipos visuales del flujo y su lógica de negocio. No publico JSON, credenciales, tokens, webhooks ni configuraciones que se puedan importar o reutilizar directamente."
        />

        <div className="automation-grid">
          {automations.map((automation) => (
            <article className="automation-card" key={automation.id}>
              <div className="automation-card__top">
                <span>{automation.category}</span>
                <small>{automation.statusLabel}</small>
              </div>
              <h3>{automation.title}</h3>

              <WorkflowPrototype title={automation.title} steps={automation.steps} />

              <div className="automation-card__flow">
                <section>
                  <strong>Problema</strong>
                  <p>{automation.problem}</p>
                </section>
                <section>
                  <strong>Solución</strong>
                  <p>{automation.solution}</p>
                </section>
                <section className="automation-card__result">
                  <strong>Resultado</strong>
                  <p>{automation.result}</p>
                </section>
              </div>

              <div className="badges" aria-label={`Herramientas aplicables a ${automation.title}`}>
                {(automation.tools || []).map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
