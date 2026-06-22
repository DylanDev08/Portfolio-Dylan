import { Link } from "react-router-dom";
export function NotFoundPage() { return <main className="state-page"><h1>Página no encontrada</h1><p>La dirección solicitada no está disponible.</p><Link className="button button--primary" to="/">Volver al portfolio</Link></main>; }
