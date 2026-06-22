import { useRef, useState } from "react";
import { downloadBlob } from "../../../lib/files/downloadBlob";

export function DataTransferManager({ onExport, onImport }) {
  const input = useRef(null);
  const [message, setMessage] = useState("");

  async function exportData() {
    setMessage("");
    const data = await onExport();
    downloadBlob(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), "portfolio-dylan.json");
  }

  async function importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setMessage("");
      const data = JSON.parse(await file.text());
      await onImport(data);
    } catch {
      setMessage("El archivo seleccionado no es un JSON valido.");
    } finally {
      event.target.value = "";
    }
  }

  return (
    <section className="admin-card">
      <h2>Datos del portfolio</h2>
      <div className="stack-actions">
        <button className="button button--secondary" onClick={exportData}>
          Exportar JSON
        </button>
        <button className="button button--secondary" onClick={() => input.current?.click()}>
          Importar JSON
        </button>
        <input ref={input} hidden type="file" accept="application/json,.json" onChange={importData} />
      </div>
      {message && <p className="admin-message">{message}</p>}
    </section>
  );
}
