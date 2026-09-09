export function SectionTitle({ eyebrow, title, description, headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <header className="section-title">
      <span>{eyebrow}</span>
      <Heading>{title}</Heading>
      {description && <p>{description}</p>}
    </header>
  );
}
