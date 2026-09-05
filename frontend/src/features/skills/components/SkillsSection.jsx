import { useMemo, useState } from "react";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { SkillCard } from "./SkillCard";

const categoryLabels = {
  TODAS: "Todas",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Base de datos",
  TOOLS: "Herramientas",
  SOFT_SKILL: "Soft skills",
};

const categoryOrder = ["TODAS", "FRONTEND", "BACKEND", "DATABASE", "TOOLS", "SOFT_SKILL"];

export function SkillsSection({ skills }) {
  const [filter, setFilter] = useState("TODAS");
  const categories = useMemo(
    () => categoryOrder.filter((category) => category === "TODAS" || skills.some((item) => item.category === category)),
    [skills],
  );
  const visible = filter === "TODAS" ? skills : skills.filter((item) => item.category === filter);

  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="Tecnologías"
          title="Herramientas que uso para construir soluciones."
          description="Evito porcentajes autodeclarados: las tecnologías principales están respaldadas por proyectos, repositorios y documentación que podés revisar desde el portfolio."
        />
        <div className="filters" role="group" aria-label="Filtrar tecnologías por categoría">
          {categories.map((category) => (
            <button
              type="button"
              className={filter === category ? "active" : ""}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              key={category}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {visible.map((skill) => (
            <SkillCard key={skill.id} skill={skill} categoryLabel={categoryLabels[skill.category] || skill.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
