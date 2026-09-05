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
          <h3>Navegación</h3>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/experiencia">Experiencia</Link>
          <Link to="/documentacion">Documentación</Link>
        </div>

        <div>
          <h3>Contacto</h3>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href={profile.whatsappUrl} target="_blank" rel="noreferrer noopener">WhatsApp</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="/cv/CV_Dylan_Salcedo.pdf" download>Descargar CV</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dylan Salcedo.</span>
        <Link to="/legal">Privacidad y uso del sitio</Link>
      </div>
    </footer>
  );
}
