import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  return (
    <section className="hero hero--professional" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span className="hero-eyebrow__dot" aria-hidden="true" /> Full Stack Developer · Rosario, Argentina</span>
          <h1 id="hero-title">{profile.firstName} <em>{profile.lastName}.</em></h1>
          <p className="hero-role">Construyo software y automatizaciones para resolver <span>problemas reales.</span></p>
          <p className="hero-lead">
            Desarrollo aplicaciones web, sistemas internos e integraciones con APIs e IA aplicada.
            Trabajo desde el problema del usuario hasta la implementación, con foco en soluciones claras y mantenibles.
          </p>

          <div className="hero-actions">
            <Link className="button button--primary" to="/proyectos">Ver proyectos</Link>
            <Link className="button button--secondary" to="/automatizaciones">Explorar automatizaciones</Link>
            <a className="button button--ghost" href="/cv/CV_Dylan_Salcedo.pdf" download="CV_Dylan_Salcedo.pdf">Descargar CV ↓</a>
          </div>
          <div className="hero-proof" aria-label="Áreas de experiencia">
            <span>React / Next.js</span>
            <span>TypeScript / Node.js</span>
            <span>SQL / Supabase</span>
            <span>n8n / APIs</span>
          </div>
          <p className="hero-availability">Ingeniería en Sistemas · Desarrollo Full Stack · Abierto a oportunidades</p>
        </div>

        <div className="portrait">
          <div className="portrait__glow" aria-hidden="true" />
          <div className="portrait__frame">
            <img
              src="/profile-dylan.jpeg"
              alt="Fotografía de Dylan Salcedo"
              width="720"
              height="720"
              fetchPriority="high"
            />
          </div>
          <div className="portrait__card">
            <strong>{profile.firstName} {profile.lastName}</strong>
            <span>Software · Datos · Automatizaciones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
