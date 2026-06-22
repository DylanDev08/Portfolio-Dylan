import { useState } from "react";

const emptyProject = {
  title: "",
  slug: "",
  description: "",
  coverImage: "/projects/fortaleza.svg",
  liveUrl: "#",
  githubUrl: "#",
  featured: false,
  order: 0,
  technologies: "React,CSS",
};

function normalizeProject(form) {
  return {
    title: form.title.trim(),
    slug: form.slug.trim(),
    description: form.description.trim(),
    coverImage: form.coverImage.trim(),
    liveUrl: form.liveUrl.trim() || "#",
    githubUrl: form.githubUrl.trim() || "#",
    featured: Boolean(form.featured),
    order: Number(form.order) || 0,
    technologies: form.technologies
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  };
}

function projectToForm(project) {
  return {
    title: project.title,
    slug: project.slug,
    description: project.description,
    coverImage: project.coverImage,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    featured: Boolean(project.featured),
    order: project.order || 0,
    technologies: (project.technologies || []).join(","),
  };
}

export function ProjectsManager({ projects, onCreate, onUpdate, onDelete }) {
  const [form, setForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState(null);

  async function submit(event) {
    event.preventDefault();
    const payload = normalizeProject(form);
    if (editingId) {
      await onUpdate(editingId, payload);
    } else {
      await onCreate(payload);
    }
    setForm(emptyProject);
    setEditingId(null);
  }

  function edit(project) {
    setEditingId(project.id);
    setForm(projectToForm(project));
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyProject);
  }

  return (
    <section className="admin-card admin-card--wide">
      <h2>Proyectos</h2>
      <form onSubmit={submit}>
        <div className="admin-form-grid">
          <label>
            Titulo
            <input required maxLength="120" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
          </label>
          <label>
            Slug
            <input
              required
              pattern="[a-z0-9-]+"
              maxLength="140"
              value={form.slug}
              onChange={(event) => setForm({ ...form, slug: event.target.value })}
            />
          </label>
          <label className="admin-field--full">
            Descripcion
            <textarea
              required
              minLength="10"
              maxLength="2000"
              rows="4"
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
            />
          </label>
          <label>
            Portada
            <input required maxLength="500" value={form.coverImage} onChange={(event) => setForm({ ...form, coverImage: event.target.value })} />
          </label>
          <label>
            Web publicada
            <input required maxLength="500" value={form.liveUrl} onChange={(event) => setForm({ ...form, liveUrl: event.target.value })} />
          </label>
          <label>
            GitHub
            <input required maxLength="500" value={form.githubUrl} onChange={(event) => setForm({ ...form, githubUrl: event.target.value })} />
          </label>
          <label>
            Orden
            <input type="number" min="0" value={form.order} onChange={(event) => setForm({ ...form, order: event.target.value })} />
          </label>
          <label className="admin-field--full">
            Tecnologias separadas por coma
            <input required value={form.technologies} onChange={(event) => setForm({ ...form, technologies: event.target.value })} />
          </label>
          <label className="admin-checkbox">
            <input type="checkbox" checked={form.featured} onChange={(event) => setForm({ ...form, featured: event.target.checked })} />
            Destacado
          </label>
        </div>
        <div className="admin-actions">
          <button className="button button--primary">{editingId ? "Guardar proyecto" : "Agregar proyecto"}</button>
          {editingId && (
            <button className="button button--secondary" type="button" onClick={cancelEdit}>
              Cancelar
            </button>
          )}
        </div>
      </form>
      <div className="admin-list">
        {projects.map((project) => (
          <div key={project.id}>
            <span>
              {project.title} · {project.slug}
            </span>
            <div className="admin-row-actions">
              <button type="button" onClick={() => edit(project)}>
                Editar
              </button>
              <button type="button" className="danger-action" onClick={() => onDelete(project.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
