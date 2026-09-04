import { SectionTitle } from "../../../components/common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Trabajos reales, plataformas y sistemas en desarrollo."
          description="Una seleccion de apps web, portfolios, e-commerce, WordPress, TiendaNube, codigo propio y codigo base full stack para mostrar variedad tecnica y criterio de producto."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
