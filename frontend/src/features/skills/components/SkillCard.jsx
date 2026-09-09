export function SkillCard({ skill, categoryLabel }) {
  return (
    <article className="skill-card">
      <span className="skill-card__category">{categoryLabel || skill.category}</span>
      <h3>{skill.name}</h3>
    </article>
  );
}
