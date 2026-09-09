import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  const consultationUrl = `${profile.whatsappUrl}?text=${encodeURIComponent("Hola Dylan, vi tu portfolio y quiero consultar por una solución digital para mi proyecto o negocio.")}`;

  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Full Stack · Software · Automatización · Rosario</span>
          <h1>
            Desarrollo soluciones digitales para <em>vender mejor</em>, operar con más control y escalar procesos.
          </h1>
          <p className="hero-lead">
            Diseño y desarrollo sitios, e-commerce, sistemas web, automatizaciones e integraciones orientadas a necesidades concretas de negocio. La tecnología se define en función del objetivo, la operación y el resultado esperado.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={consultationUrl} target="_blank" rel="noreferrer noopener">Solicitar una propuesta</a>
            <Link className="button button--secondary" to="/proyectos">Ver proyectos</Link>
            <a className="button button--ghost" href="/cv/CV_Dylan_Salcedo.pdf" download="CV_Dylan_Salcedo_ATS_2026.pdf">CV ATS 2026</a>
          </div>

          <div className="hero-proof" aria-label="Soluciones principales">
            <span>Sistemas web</span>
            <span>E-commerce</span>
            <span>Automatización</span>
            <span>Integraciones y datos</span>
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
