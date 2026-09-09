import { SectionTitle } from "../../../components/common/SectionTitle";

export function ExperienceSection({ items }) {
  return (
    <section className="section section--alt" id="experiencia">
      <div className="container">
        <SectionTitle
          eyebrow="Experiencia"
          title="Trabajo donde desarrollo y operación se conectan."
          description="Además de construir interfaces, trabajo sobre datos, procesos internos, automatizaciones y mantenimiento para que las soluciones puedan usarse en el día a día."
          headingLevel="h1"
        />
        <div className="timeline">
          {items.map((item) => (
            <article key={item.id}>
              <span>{item.durationLabel}</span>
              <div>
                <h2>{item.role}</h2>
                <h3>{item.company}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
