import { Link } from "react-router-dom";

export function HeroSection({ profile }) {
  return (
    <section className="hero screen-panel" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Archivo de jugador disponible</span>
          <h1>
            Dylan Salcedo
            <br />
            <em>Full Stack Developer</em>
          </h1>
          <p>
            {profile.bio} Tengo {profile.age} anos, estoy dispuesto a aprender nuevas tecnologias, trabajar en equipo y
            participar en productos reales.
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
            <strong>LVL 18 - Full Stack</strong>
            <span>React - Node.js - SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
