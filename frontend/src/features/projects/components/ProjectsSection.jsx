import { SectionTitle } from "../../../components/common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Problemas reales, soluciones concretas y trabajo verificable."
          description="Cada proyecto indica qué necesidad aborda, qué construí y qué valor aporta. Los estados diferencian productos publicados, trabajos en desarrollo y repositorios disponibles."
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
