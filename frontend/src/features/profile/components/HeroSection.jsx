import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  const consultationUrl = `${profile.whatsappUrl}?text=${encodeURIComponent("Hola Dylan, vi tu portfolio y quiero contarte un problema o proyecto para evaluar una solución.")}`;

  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Full Stack · Soluciones digitales · Rosario</span>
          <h1>
            Desarrollo soluciones que hacen <em>más simple</em> vender, operar y crecer.
          </h1>
          <p className="hero-lead">
            {profile.bio} No parto de una tecnología: parto del problema y construyo la solución que mejor encaja con el proceso.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={consultationUrl} target="_blank" rel="noreferrer noopener">Contame qué necesitás resolver</a>
            <Link className="button button--secondary" to="/proyectos">Ver proyectos</Link>
            <a className="button button--ghost" href="/cv/CV_Dylan_Salcedo.pdf" download>CV ATS 2026</a>
          </div>

          <div className="hero-proof" aria-label="Soluciones principales">
            <span>Sistemas web</span>
            <span>E-commerce</span>
            <span>Automatización</span>
            <span>Datos</span>
          </div>
        </div>

        <div className="portrait">
          <div className="portrait__glow" />
          <div className="portrait__frame">
            <img
              src={profile.profileImage || "/profile-dylan.jpeg"}
              alt="Dylan Salcedo, Full Stack Developer"
              width="720"
              height="720"
              fetchPriority="high"
            />
          </div>
          <div className="portrait__card">
            <strong>Dylan Salcedo</strong>
            <span>Full Stack · Software · Automatización</span>
          </div>
        </div>
      </div>
    </section>
  );
}
