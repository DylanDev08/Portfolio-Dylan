import { useState } from "react";

const categories = ["FRONTEND", "BACKEND", "DATABASE", "TOOLS", "SOFT_SKILL"];
const emptySkill = { name: "", category: "FRONTEND", level: 70 };

function normalizeSkill(form) {
  return { ...form, name: form.name.trim(), level: Number(form.level) };
}

export function SkillsManager({ skills, onCreate, onUpdate, onDelete }) {
  const [form, setForm] = useState(emptySkill);
  const [editingId, setEditingId] = useState(null);

  async function submit(event) {
    event.preventDefault();
    const payload = normalizeSkill(form);
    if (editingId) {
      await onUpdate(editingId, payload);
    } else {
      await onCreate(payload);
    }
    setForm(emptySkill);
    setEditingId(null);
  }

  function edit(skill) {
    setEditingId(skill.id);
    setForm({ name: skill.name, category: skill.category, level: skill.level });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptySkill);
  }

  return (
    <section className="admin-card">
      <h2>Skills</h2>
      <form onSubmit={submit}>
        <label>
          Nombre
          <input required maxLength="60" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </label>
        <label>
          Categoria
          <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Nivel
          <input
            type="number"
            min="1"
            max="100"
            value={form.level}
            onChange={(event) => setForm({ ...form, level: event.target.value })}
          />
        </label>
        <div className="admin-actions">
          <button className="button button--primary">{editingId ? "Guardar skill" : "Agregar skill"}</button>
          {editingId && (
            <button className="button button--secondary" type="button" onClick={cancelEdit}>
              Cancelar
            </button>
          )}
        </div>
      </form>
      <div className="admin-list">
        {skills.map((skill) => (
          <div key={skill.id}>
            <span>
              {skill.name} · {skill.category} · {skill.level}%
            </span>
            <div className="admin-row-actions">
              <button type="button" onClick={() => edit(skill)}>
                Editar
              </button>
              <button type="button" className="danger-action" onClick={() => onDelete(skill.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
