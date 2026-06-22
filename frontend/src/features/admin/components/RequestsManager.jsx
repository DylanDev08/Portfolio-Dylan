const statuses = ["PENDING", "CONTACTED", "IN_PROGRESS", "CLOSED", "REJECTED"];

export function RequestsManager({ requests, onStatusChange }) {
  return (
    <section className="admin-card admin-card--wide">
      <h2>Solicitudes</h2>
      {requests.length === 0 && <p>No hay solicitudes todavia.</p>}
      {requests.map((request) => (
        <article className="request-row" key={request.id}>
          <div className="request-row__header">
            <div>
              <strong>
                {request.name} · {request.projectType}
              </strong>
              <span>
                {request.email}
                {request.phone ? ` · ${request.phone}` : ""}
              </span>
            </div>
            <label>
              Estado
              <select value={request.status} onChange={(event) => onStatusChange(request.id, event.target.value)}>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {request.company && <span>Empresa: {request.company}</span>}
          {request.budget && <span>Presupuesto: {request.budget}</span>}
          <p>{request.message}</p>
        </article>
      ))}
    </section>
  );
}
