import { Link } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";

export function LegalPage() {
  return (
    <PageShell>
      <section className="legal-screen">
        <div className="container legal-terminal">
          <span className="eyebrow">System file</span>
          <h1>Terminos y condiciones</h1>
          <div className="legal-lines">
            <article>
              <strong>Uso del portfolio</strong>
              <p>
                Este sitio es un portfolio personal creado para presentar experiencia, proyectos, formacion y habilidades
                tecnicas de Dylan Salcedo ante empresas, reclutadores y equipos de desarrollo.
              </p>
            </article>
            <article>
              <strong>Contenido y proyectos</strong>
              <p>
                Los enlaces externos llevan a sitios publicados, repositorios o perfiles profesionales. Algunas portadas
                pueden ser representaciones visuales hasta que se reemplacen por capturas reales.
              </p>
            </article>
            <article>
              <strong>Datos de contacto</strong>
              <p>
                El correo, LinkedIn y GitHub se ofrecen solamente como canales profesionales. No hay formulario publico ni
                almacenamiento de solicitudes en esta version frontend.
              </p>
            </article>
            <article>
              <strong>CV descargable</strong>
              <p>
                El curriculum se ofrece como archivo PDF publico para facilitar evaluaciones laborales y contacto directo.
              </p>
            </article>
          </div>
          <Link className="button button--primary" to="/">
            Volver al menu
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
