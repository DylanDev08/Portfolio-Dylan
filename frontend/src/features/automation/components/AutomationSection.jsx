import { SectionTitle } from "../../../components/common/SectionTitle";

export function AutomationSection({ automations }) {
  return (
    <section className="section automation-section" id="automatizaciones">
      <div className="container">
        <SectionTitle
          eyebrow="Automatizaciones"
          title="Procesos que hoy consumen tiempo y pueden resolverse mejor."
          description="No muestro archivos JSON como producto final. Muestro el problema operativo, el tipo de solución que diseño y el resultado que busca conseguir."
        />

        <div className="automation-grid">
          {automations.map((automation) => (
            <article className="automation-card" key={automation.id}>
              <div className="automation-card__top">
                <span>{automation.category}</span>
                <small>{automation.statusLabel}</small>
              </div>
              <h3>{automation.title}</h3>

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
                  <strong>Resultado buscado</strong>
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
