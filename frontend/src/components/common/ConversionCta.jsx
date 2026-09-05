import { Link } from "react-router-dom";

export function ConversionCta({
  eyebrow = "¿Tenés un proyecto?",
  title = "Convirtamos una necesidad concreta en una solución clara.",
  description = "Contame qué proceso, servicio o idea querés mejorar. Primero definimos el problema y después la tecnología necesaria.",
  ctaLabel = "Hablemos",
}) {
  return (
    <section className="section home-cta conversion-cta">
      <div className="container home-cta__inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button--primary" to="/contacto">{ctaLabel}</Link>
      </div>
    </section>
  );
}
