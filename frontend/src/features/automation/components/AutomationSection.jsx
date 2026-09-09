import { SectionTitle } from "../../../components/common/SectionTitle";
import { WorkflowPrototype } from "./WorkflowPrototype";

export function AutomationSection({ automations }) {
  return (
    <section className="section automation-section" id="automatizaciones">
      <div className="container">
        <SectionTitle
          eyebrow="Automatización de procesos"
          title="Soluciones para reducir trabajo manual, errores y pérdida de seguimiento."
          description="Diseño flujos de automatización para atención, datos, seguimiento y operación. Cada solución se adapta al proceso real del negocio y puede integrar n8n, APIs, WhatsApp, Google Sheets, scripts y otras herramientas según el caso."
          headingLevel="h1"
        />

        <div className="automation-grid">
          {automations.map((automation) => (
            <article className="automation-card" key={automation.id}>
              <div className="automation-card__top">
                <span>{automation.category}</span>
                <small>Solución aplicable</small>
              </div>
              <h2>{automation.title}</h2>

              <WorkflowPrototype title={automation.title} steps={automation.steps} />

              <div className="automation-card__flow">
                <section>
                  <strong>Necesidad</strong>
                  <p>{automation.problem}</p>
                </section>
                <section>
                  <strong>Implementación</strong>
                  <p>{automation.solution}</p>
                </section>
                <section className="automation-card__result">
                  <strong>Resultado esperado</strong>
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
