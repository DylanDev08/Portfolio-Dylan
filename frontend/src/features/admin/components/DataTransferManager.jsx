import { useRef, useState } from "react";
import { downloadBlob } from "../../../lib/files/downloadBlob";

function csvValue(value) {
  const normalized = Array.isArray(value)
    ? value.join(" | ")
    : value && typeof value === "object"
      ? JSON.stringify(value)
      : value ?? "";

  return `"${String(normalized).replaceAll('"', '""')}"`;
}

function rowsFromPortfolio(data) {
  const rows = [];

  function pushObject(section, itemLabel, object) {
    if (!object || typeof object !== "object") return;
    Object.entries(object).forEach(([field, value]) => {
      if (["id", "createdAt", "updatedAt"].includes(field)) return;
      rows.push([section, itemLabel, field, value]);
    });
  }

  pushObject("Perfil", "Dylan Salcedo", data.profile);

  (data.skills || []).forEach((skill, index) => {
    pushObject("Skills", skill.name || `Skill ${index + 1}`, skill);
  });

  (data.projects || []).forEach((project, index) => {
    pushObject("Proyectos", project.title || `Proyecto ${index + 1}`, project);
  });

  (data.workExperiences || []).forEach((experience, index) => {
    pushObject("Experiencia", experience.company || `Experiencia ${index + 1}`, experience);
  });

  (data.education || []).forEach((education, index) => {
    pushObject("Formación", education.institution || `Formación ${index + 1}`, education);
  });

  return rows;
}

function portfolioToCsv(data) {
  const header = ["Sección", "Elemento", "Campo", "Valor"];
  const rows = rowsFromPortfolio(data);
  return [header, ...rows].map((row) => row.map(csvValue).join(";")).join("\r\n");
}

export function DataTransferManager({ onExport, onImport }) {
  const input = useRef(null);
  const [message, setMessage] = useState("");

  async function exportData() {
    try {
      setMessage("");
      const data = await onExport();
      const csv = `\uFEFF${portfolioToCsv(data)}`;
      downloadBlob(new Blob([csv], { type: "text/csv;charset=utf-8" }), "portfolio-dylan.csv");
      setMessage("CSV exportado correctamente.");
    } catch {
      setMessage("No se pudo exportar el CSV.");
    }
  }

  async function importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setMessage("");
      const data = JSON.parse(await file.text());
      await onImport(data);
      setMessage("Datos importados correctamente.");
    } catch {
      setMessage("El archivo seleccionado no es un JSON válido.");
    } finally {
      event.target.value = "";
    }
  }

  return (
    <section className="admin-card">
      <h2>Datos del portfolio</h2>
      <p>Exportá una copia legible en Excel/Sheets. La importación administrativa continúa usando JSON estructurado.</p>
      <div className="stack-actions">
        <button className="button button--secondary" onClick={exportData}>
          Exportar CSV
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
