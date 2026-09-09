import { SectionTitle } from "../../../components/common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

const sections = [
  {
    id: "custom",
    eyebrow: "Código propio",
    title: "Sistemas y productos desarrollados a medida",
    description: "Proyectos donde trabajo arquitectura, frontend, backend, datos y operación. Cuando existe una demo pública, la tarjeta muestra la vista real del sitio.",
  },
  {
    id: "platform",
    eyebrow: "WordPress / TiendaNube",
    title: "Sitios y e-commerce construidos sobre plataformas",
    description: "Trabajos donde el problema no requería construir toda la infraestructura desde cero, sino resolver presencia, venta, navegación y conversión usando una plataforma adecuada.",
  },
  {
    id: "development",
    eyebrow: "En desarrollo",
    title: "Productos que todavía están evolucionando",
    description: "Los muestro con su estado real. Si existe una demo se ve directamente; si todavía no hay una versión pública estable, muestro el repositorio en lugar de inventar una portada.",
  },
];

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Primero el problema. Después la solución y la evidencia."
          description="El portfolio está separado por tipo de entrega para que se entienda qué desarrollé a medida, qué resolví sobre plataformas y qué productos siguen en construcción."
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
