import { SectionTitle } from "../../../components/common/SectionTitle";

export function AboutSection() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container content-split">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Me interesa resolver mejor, no sumar complejidad."
          description="Estudio Ingeniería en Sistemas Informáticos y desarrollo soluciones web con una mirada práctica sobre procesos, datos y experiencia de uso."
        />

        <div className="about-copy">
          <p>
            Soy Dylan Salcedo, Full Stack Developer. Trabajo con productos web, e-commerce, automatizaciones,
            dashboards y sistemas internos cuando la tecnología puede ahorrar tiempo, ordenar información o hacer más
            claro un proceso.
          </p>
          <p>
            Busco que cada solución sea entendible para la persona que la usa, tenga una base técnica mantenible y
            pueda evolucionar sin depender de parches innecesarios.
          </p>

          <div className="facts">
            <article><strong>7 meses</strong><span>Fortaleza Construcciones</span></article>
            <article><strong>1,5+ años</strong><span>Proyectos freelance</span></article>
            <article><strong>Full Stack</strong><span>Web apps y sistemas</span></article>
            <article><strong>Data</strong><span>Automatización y dashboards</span></article>
          </div>
        </div>
      </div>
    </section>
  );
}
