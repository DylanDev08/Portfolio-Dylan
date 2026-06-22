export function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
