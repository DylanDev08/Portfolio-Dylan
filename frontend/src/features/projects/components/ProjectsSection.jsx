import { useMemo, useState } from "react";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

const filters = [
  { id: "all", label: "Todos" },
  { id: "live", label: "Publicados" },
  { id: "development", label: "En desarrollo" },
  { id: "code", label: "Código propio" },
  { id: "platform", label: "WordPress / TiendaNube" },
];

function matchesFilter(project, filter) {
  if (filter === "all") return true;
  if (filter === "live") return project.status === "live";
  if (filter === "development") return project.status === "in-development";
  if (filter === "code") return project.sourceType?.toLowerCase().includes("código");
  if (filter === "platform") return ["wordpress", "tiendanube"].includes(project.sourceType?.toLowerCase());
  return true;
}

export function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Problemas reales, soluciones concretas y trabajo verificable."
          description="Cada proyecto indica qué necesidad aborda, qué construí y qué valor aporta. Los estados diferencian productos publicados, trabajos en desarrollo y repositorios disponibles."
        />

        <div className="project-filters" role="group" aria-label="Filtrar proyectos">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={activeFilter === filter.id ? "active" : undefined}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="project-results" aria-live="polite">
          Mostrando {visibleProjects.length} de {projects.length} proyectos.
        </p>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
