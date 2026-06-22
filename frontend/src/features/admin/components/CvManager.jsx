import { useState } from "react";
import { env } from "../../../config/env";
export function CvManager({ onUpload }) {
  const [file, setFile] = useState(null);
  async function submit(event) { event.preventDefault(); if (!file) return; const form = new FormData(); form.append("cv", file); await onUpload(form); setFile(null); event.currentTarget.reset(); }
  return <section className="admin-card"><h2>Currículum</h2><p>Subí únicamente un archivo PDF de hasta 3 MB.</p><form onSubmit={submit}><input type="file" accept="application/pdf,.pdf" onChange={(event) => setFile(event.target.files?.[0] || null)}/><button className="button button--primary" disabled={!file}>Importar/Reemplazar CV</button><a className="button button--secondary" href={`${env.apiUrl}/cv/download`}>Exportar/Descargar CV</a></form></section>;
}
