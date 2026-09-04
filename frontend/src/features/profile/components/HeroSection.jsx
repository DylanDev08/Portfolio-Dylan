import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  return (
    <section className="hero screen-panel" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Soluciones digitales para negocios reales</span>
          <h1>
            Dylan Salcedo
            <br />
            <em>Full Stack Developer</em>
          </h1>
          <p>
            {profile.bio} Me enfoco en entender el problema, ordenar la informacion y crear herramientas utiles para
            que cada proyecto sea mas claro, medible y facil de mantener.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/proyectos">Ver proyectos</Link>
            <a className="button button--secondary" href="/cv/CV_Dylan_Salcedo.pdf" download>Descargar CV</a>
            <a className="button button--ghost" href={profile.githubUrl || "#"} target="_blank" rel="noreferrer noopener">GitHub</a>
            <a className="button button--ghost" href={profile.linkedinUrl || "#"} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </div>
        </div>

        <div className="portrait">
          <div className="portrait__glow" />
          <img src={profile.profileImage || "/profile-dylan.jpeg"} alt="Foto de perfil de Dylan Salcedo" />
          <div className="portrait__card">
            <strong>Soluciones Full Stack</strong>
            <span>Web apps - Datos - Automatizacion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
