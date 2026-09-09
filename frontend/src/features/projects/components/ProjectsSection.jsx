import { SectionTitle } from "../../../components/common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

const sections = [
  {
    id: "custom",
    eyebrow: "Código propio",
    title: "Sistemas y productos desarrollados a medida",
    description: "Proyectos donde trabajo arquitectura, frontend, backend, datos y operación. Cada caso reúne portada, producto, repositorio y documentación técnica cuando esos recursos están disponibles públicamente.",
  },
  {
    id: "platform",
    eyebrow: "WordPress / TiendaNube",
    title: "Sitios y e-commerce construidos sobre plataformas",
    description: "Soluciones enfocadas en presencia, venta, navegación y conversión utilizando la plataforma más adecuada para el negocio. Se muestra la web publicada y la documentación del trabajo realizado.",
  },
  {
    id: "development",
    eyebrow: "Productos en evolución",
    title: "Productos con desarrollo activo y base técnica definida",
    description: "Proyectos que continúan incorporando funcionalidades y mejoras sobre una arquitectura ya planteada. Se presenta el alcance actual, la identidad del producto, el código y la documentación disponible.",
  },
];

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Problemas reales convertidos en productos y soluciones digitales."
          description="Cada caso explica la necesidad, la solución desarrollada, el valor que aporta y los recursos disponibles para revisar el trabajo: web, repositorio y documentación."
          headingLevel="h1"
        />

        <div className="project-sections">
          {sections.map((section) => {
            const sectionProjects = projects.filter((project) => project.portfolioSection === section.id);
            if (!sectionProjects.length) return null;

            return (
              <section className="project-section-group" key={section.id} aria-labelledby={`project-section-${section.id}`}>
                <div className="project-section-group__heading">
                  <span className="eyebrow">{section.eyebrow}</span>
                  <h2 id={`project-section-${section.id}`}>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
                <div className="projects-grid">
                  {sectionProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
