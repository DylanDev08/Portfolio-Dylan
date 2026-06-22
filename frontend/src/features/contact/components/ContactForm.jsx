import { useState } from "react";
import { getPublicErrorMessage } from "../../../lib/errors/getPublicErrorMessage";
import { contactApi } from "../api/contactApi";
import { validateContact } from "../validation/contactValidation";

const initial = { name: "", email: "", phone: "", company: "", projectType: "PORTFOLIO", message: "", budget: "" };

function normalize(values) {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, typeof value === "string" ? value.trim() : value]));
}

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function change(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  }

  async function submit(event) {
    event.preventDefault();
    const next = validateContact(values);
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      await contactApi.create(normalize(values));
      setValues(initial);
      setMessage("Solicitud enviada correctamente.");
    } catch (error) {
      setMessage(getPublicErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          Nombre y apellido *
          <input name="name" maxLength="100" value={values.name} onChange={change} disabled={loading} />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          Correo *
          <input name="email" type="email" maxLength="160" value={values.email} onChange={change} disabled={loading} />
          {errors.email && <small>{errors.email}</small>}
        </label>
        <label>
          Telefono
          <input name="phone" maxLength="30" value={values.phone} onChange={change} disabled={loading} />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
        <label>
          Empresa
          <input name="company" maxLength="120" value={values.company} onChange={change} disabled={loading} />
          {errors.company && <small>{errors.company}</small>}
        </label>
        <label>
          Tipo de proyecto
          <select name="projectType" value={values.projectType} onChange={change} disabled={loading}>
            <option value="PORTFOLIO">Portfolio</option>
            <option value="LANDING_PAGE">Landing page</option>
            <option value="ECOMMERCE">E-commerce</option>
            <option value="WEB_SYSTEM">Sistema web</option>
            <option value="MAINTENANCE">Mantenimiento</option>
            <option value="OTHER">Otro</option>
          </select>
          {errors.projectType && <small>{errors.projectType}</small>}
        </label>
        <label>
          Presupuesto estimado
          <input name="budget" maxLength="100" value={values.budget} onChange={change} disabled={loading} />
          {errors.budget && <small>{errors.budget}</small>}
        </label>
        <label className="form-field--full">
          Mensaje *
          <textarea name="message" rows="6" maxLength="3000" value={values.message} onChange={change} disabled={loading} />
          {errors.message && <small>{errors.message}</small>}
        </label>
      </div>
      <button className="button button--primary button--full" disabled={loading}>
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>
      {message && <p className="form-message">{message}</p>}
    </form>
  );
}
