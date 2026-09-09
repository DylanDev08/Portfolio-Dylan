import { SectionTitle } from "../../../components/common/SectionTitle";

export function ExperienceSection({ items }) {
  return (
    <section className="section section--alt" id="experiencia">
      <div className="container">
        <SectionTitle
          eyebrow="Experiencia"
          title="Trabajo donde desarrollo y operación se conectan."
          description="Además de construir interfaces, trabajo sobre datos, procesos internos, automatizaciones y mantenimiento para que las soluciones puedan usarse en el día a día."
        />
        <div className="timeline">
          {items.map((item) => (
            <article key={item.id}>
              <span>{item.durationLabel}</span>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
