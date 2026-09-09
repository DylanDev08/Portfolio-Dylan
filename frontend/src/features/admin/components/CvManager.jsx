import { useState } from "react";

const PUBLIC_CV_URL = "/cv/CV_Dylan_Salcedo.pdf";

export function CvManager({ onUpload }) {
  const [file, setFile] = useState(null);

  async function submit(event) {
    event.preventDefault();
    if (!file) return;

    const form = new FormData();
    form.append("cv", file);
    await onUpload(form);
    setFile(null);
    event.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h2>Currículum</h2>
      <p>El portfolio público descarga siempre el PDF ATS versionado con el frontend.</p>
      <form onSubmit={submit}>
        <input
          type="file"
          accept="application/pdf,.pdf"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />
        <button className="button button--primary" disabled={!file}>
          Subir copia al backend
        </button>
        <a
          className="button button--secondary"
          href={PUBLIC_CV_URL}
          download="CV_Dylan_Salcedo_ATS_2026.pdf"
        >
          Descargar CV ATS
        </a>
      </form>
    </section>
  );
}
