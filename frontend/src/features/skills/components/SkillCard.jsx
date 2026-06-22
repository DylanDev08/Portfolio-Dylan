export function SkillCard({ skill, categoryLabel }) {
  const level = skill.level || 70;

  return (
    <article className="skill-card">
      <div>
        <h3>{skill.name}</h3>
        <span>{categoryLabel || skill.category}</span>
      </div>
      <div className="skill-level">
        <i style={{ width: `${level}%` }} />
      </div>
      <small>{level}%</small>
    </article>
  );
}
