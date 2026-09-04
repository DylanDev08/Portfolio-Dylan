import { SectionTitle } from "../../../components/common/SectionTitle";

export function AboutSection() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container content-split">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Soluciones digitales con foco en procesos reales."
          description="Me interesa entender la necesidad del cliente, ordenar la información y convertir problemas operativos en herramientas simples, medibles y mantenibles."
        />
        <div className="about-copy">
          <p>
            Soy Salcedo Dylan, programador Full Stack y estudiante de Ingeniería en Sistemas Informáticos. Trabajo en
            soluciones web, automatizaciones, dashboards, e-commerce, ERP y sistemas internos orientados a mejorar la
            gestión de datos y la experiencia de uso.
          </p>
          <p>
            Busco colaborar en proyectos donde la tecnología no sea solo código, sino una forma de ahorrar tiempo,
            reducir errores, organizar procesos y facilitar mejores decisiones para el negocio.
          </p>
          <div className="facts">
            <article><strong>7</strong><span>Meses en Fortaleza</span></article>
            <article><strong>1,5+</strong><span>Años freelance</span></article>
            <article><strong>Data</strong><span>Dashboards y automatización</span></article>
            <article><strong>Full Stack</strong><span>Web apps y sistemas</span></article>
          </div>
        </div>
      </div>
    </section>
  );
}
