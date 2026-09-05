import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Soluciones digitales · Rosario, Argentina</span>
          <h1>
            Diseño sistemas web que hacen <em>más simple</em> trabajar.
          </h1>
          <p className="hero-lead">
            {profile.bio} Me enfoco en que la solución sea entendible para quien la usa y mantenible para quien la continúa.
          </p>

          <div className="hero-actions">
            <Link className="button button--primary" to="/proyectos">Ver proyectos</Link>
            <Link className="button button--secondary" to="/servicios">Qué puedo resolver</Link>
            <a className="button button--ghost" href="/cv/CV_Dylan_Salcedo.pdf" download>Descargar CV</a>
          </div>

          <div className="hero-proof" aria-label="Áreas principales de trabajo">
            <span>Web apps</span>
            <span>E-commerce</span>
            <span>Automatización</span>
            <span>Datos</span>
          </div>
        </div>

        <div className="portrait">
          <div className="portrait__glow" />
          <img
            src={profile.profileImage || "/profile-dylan.jpeg"}
            alt="Dylan Salcedo, desarrollador Full Stack"
            width="720"
            height="720"
            fetchPriority="high"
          />
          <div className="portrait__card">
            <strong>Full Stack Developer</strong>
            <span>Producto · Datos · Automatización</span>
          </div>
        </div>
      </div>
    </section>
  );
}
