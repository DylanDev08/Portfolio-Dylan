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
          eyebrow="Skills"
          title="Tecnologias y herramientas."
          description="Filtra por categoria para recorrer rapidamente mis conocimientos."
        />
        <div className="filters">
          {categories.map((category) => (
            <button className={filter === category ? "active" : ""} onClick={() => setFilter(category)} key={category}>
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
