import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  const consultationUrl = `${profile.whatsappUrl}?text=${encodeURIComponent("Hola Dylan, vi tu portfolio y quiero consultar por una solución digital para mi proyecto o negocio.")}`;

  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Páginas web · Tiendas online · Automatización · Rosario</span>
          <h1>
            Creamos páginas web y soluciones digitales para que tu negocio <em>consiga más consultas</em> y trabaje mejor.
          </h1>
          <p className="hero-lead">
            Desde una web profesional con contacto por WhatsApp hasta catálogos, tiendas online y sistemas de gestión: te ayudo a presentar tus servicios, recibir consultas y ordenar procesos. Trabajamos con objetivos claros y una propuesta adaptada a tu negocio.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={consultationUrl} target="_blank" rel="noreferrer noopener">Pedir diagnóstico inicial</a>
            <Link className="button button--secondary" to="/proyectos">Ver trabajos reales</Link>
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
