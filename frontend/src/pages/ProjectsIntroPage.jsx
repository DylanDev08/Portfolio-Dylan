import { Link } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";

export function ProjectsIntroPage() {
  return (
    <PageShell>
      <section className="project-stage">
        <div className="container project-stage__panel">
          <span className="eyebrow">Seleccion de mundo</span>
          <h1>Proyectos desbloqueados</h1>
          <p>
            Una pantalla previa para entrar al archivo de trabajos: empresas, e-commerce, marketing digital y desarrollo
            web aplicado.
          </p>
          <div className="stage-map" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <Link className="button button--primary" to="/proyectos/listado">Entrar al listado</Link>
        </div>
      </section>
    </PageShell>
  );
}
