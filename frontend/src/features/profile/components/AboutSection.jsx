import { SectionTitle } from "../../../components/common/SectionTitle";
export function AboutSection() {
  return <section className="section" id="sobre-mi"><div className="container content-split">
    <SectionTitle eyebrow="Sobre mí" title="Código con propósito y ganas de crecer." description="Me interesa participar en productos reales, trabajar con equipos y mejorar la experiencia de usuario y la lógica de cada sistema."/>
    <div className="about-copy"><p>Soy Salcedo Dylan, programador Full Stack y estudiante de Ingeniería en Sistemas Informáticos. Desarrollo interfaces responsivas, APIs y soluciones conectadas a bases de datos relacionales.</p><p>Busco colaborar en nuevas implementaciones, mantenimiento y sustentabilidad de proyectos, aportando organización, compromiso y mejora continua.</p>
      <div className="facts"><article><strong>18</strong><span>Años</span></article><article><strong>1,5+</strong><span>Años freelance</span></article><article><strong>3</strong><span>Meses en Fortaleza</span></article><article><strong>100%</strong><span>Dispuesto a aprender</span></article></div>
    </div>
  </div></section>;
}
