import { Link } from "react-router-dom";

export function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <span>DS</span>Dylan Salcedo
          </Link>
          <p>Portfolio personal Full Stack para empresas, reclutadores y equipos de desarrollo.</p>
        </div>
        <div>
          <h3>Pantallas</h3>
          <Link to="/sobre-mi">Sobre mi</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/proyectos">Proyectos</Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Gmail</a>
          <a href="/cv/CV_Dylan_Salcedo.pdf" download>Descargar CV</a>
        </div>
        <div>
          <h3>Legal</h3>
          <Link to="/legal">Terminos legales</Link>
          <Link to="/legal">Condiciones</Link>
        </div>
      </div>
      <div className="container footer-bottom" id="terminos">
        (c) {new Date().getFullYear()} Dylan Salcedo. Portfolio personal para evaluacion profesional. La informacion de
        contacto se usa solo para responder oportunidades laborales o consultas profesionales.
      </div>
    </footer>
  );
}
