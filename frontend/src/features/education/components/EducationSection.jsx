import { SectionTitle } from "../../../components/common/SectionTitle";

export function EducationSection({ items }) {
  return (
    <section className="section" id="formacion">
      <div className="container">
        <SectionTitle
          eyebrow="Formación"
          title="Estudios y aprendizaje continuo."
          headingLevel="h1"
        />
        <div className="education-grid">
          {items.map((item) => (
            <article key={item.id}>
              <span>{item.period}</span>
              <h2>{item.title}</h2>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
