import { Link } from "react-router-dom";

export function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Dylan Salcedo - Inicio">
            <img className="brand__mark" src="/brand/ds-logo.svg" alt="" width="44" height="44" />
            <span className="brand__text">
              <strong>Dylan Salcedo</strong>
              <small>Full Stack · Soluciones digitales</small>
            </span>
          </Link>
          <p>Desarrollo soluciones web orientadas a ordenar procesos, mejorar operaciones y convertir necesidades reales en productos digitales claros.</p>
        </div>

        <div>
          <h3>Explorar</h3>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/automatizaciones">Automatización</Link>
          <Link to="/adtech">ADTech</Link>
        </div>

        <div>
          <h3>Perfil y contacto</h3>
          <Link to="/sobre-mi">Sobre mí</Link>
          <Link to="/experiencia">Experiencia</Link>
          <Link to="/formacion">Formación</Link>
          <Link to="/documentacion">Documentación</Link>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <Link to="/contacto">Contacto</Link>
          <a href="/cv/CV_Dylan_Salcedo.pdf" download="CV_Dylan_Salcedo_ATS_2026.pdf">Descargar CV ATS</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dylan Salcedo.</span>
        <Link to="/legal">Privacidad y uso del sitio</Link>
      </div>
    </footer>
  );
}
