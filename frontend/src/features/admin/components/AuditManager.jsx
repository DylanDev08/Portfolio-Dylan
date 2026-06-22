function formatDate(value) {
  return new Intl.DateTimeFormat("es-AR", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}

export function AuditManager({ visits, logins }) {
  return (
    <section className="admin-card admin-card--wide">
      <h2>Actividad</h2>
      <div className="audit-grid">
        <div>
          <h3>Personas que ingresaron</h3>
          <div className="audit-list">
            {visits.map((visit) => (
              <article key={visit.id}>
                <strong>{visit.path}</strong>
                <span>{formatDate(visit.createdAt)}</span>
                <small>{visit.referrer || "Entrada directa"}</small>
              </article>
            ))}
            {!visits.length && <p>No hay visitas registradas.</p>}
          </div>
        </div>
        <div>
          <h3>Logins</h3>
          <div className="audit-list">
            {logins.map((login) => (
              <article key={login.id}>
                <strong>{login.email}</strong>
                <span>{login.success ? "Correcto" : "Fallido"} - {formatDate(login.createdAt)}</span>
                <small>{login.ip || "IP no disponible"}</small>
              </article>
            ))}
            {!logins.length && <p>No hay logins registrados.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
