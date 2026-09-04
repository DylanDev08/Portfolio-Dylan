import { Link } from "react-router-dom";

export function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <span>DS</span>Dylan Salcedo
          </Link>
          <p>Portfolio personal Full Stack para empresas, reclutadores, clientes y equipos de desarrollo.</p>
        </div>
        <div>
          <h3>Portfolio</h3>
          <Link to="/servicios">Servicios</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/automatizaciones">Workflows</Link>
          <Link to="/documentacion">Documentacion</Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href={profile.whatsappUrl} target="_blank" rel="noreferrer noopener">WhatsApp</a>
          <a href={`mailto:${profile.email}`}>Gmail</a>
          <a href="/cv/CV_Dylan_Salcedo.pdf" download>Descargar CV</a>
        </div>
        <div>
          <h3>Codigo</h3>
          <a href={profile.portfolioUrl || profile.githubUrl} target="_blank" rel="noreferrer noopener">Portfolio en GitHub</a>
          <Link to="/skills">Skills</Link>
          <Link to="/contacto">Contacto profesional</Link>
          <Link to="/legal">Terminos legales</Link>
        </div>
      </div>
      <div className="container footer-bottom" id="terminos">
        (c) {new Date().getFullYear()} Dylan Salcedo. Portfolio personal para evaluacion profesional. La informacion de
        contacto se usa solo para responder oportunidades laborales o consultas profesionales.
      </div>
    </footer>
  );
}
