import { SectionTitle } from "../../../components/common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

const sections = [
  {
    id: "custom",
    eyebrow: "Código propio",
    title: "Sistemas y productos desarrollados a medida",
    description: "Proyectos donde trabajo arquitectura, frontend, backend, datos y operación. Cada card deja a mano portada, caso, demo, repositorio y documentación cuando están disponibles públicamente.",
  },
  {
    id: "platform",
    eyebrow: "WordPress / TiendaNube",
    title: "Sitios y e-commerce construidos sobre plataformas",
    description: "Trabajos enfocados en presencia, venta, navegación y conversión. Como WordPress y TiendaNube no implican un repositorio público propio en estos casos, se muestra la web y la documentación del caso sin inventar código inexistente.",
  },
  {
    id: "development",
    eyebrow: "En desarrollo",
    title: "Productos que todavía están evolucionando",
    description: "El estado se muestra tal como es: si hay demo se enlaza; si todavía no existe una versión pública estable, la portada, el repositorio y la documentación disponible funcionan como evidencia del avance.",
  },
];

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Primero el problema. Después la solución y la evidencia."
          description="Cada proyecto usa una identidad visual acorde, una portada real y accesos claros. La prioridad es entender qué resolví y poder verificar el trabajo sin recorrer toda la página."
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
