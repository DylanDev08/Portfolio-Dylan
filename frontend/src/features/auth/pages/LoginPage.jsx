import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getPublicErrorMessage } from "../../../lib/errors/getPublicErrorMessage";

const ADMIN_PATH = "/dylan-panel";

export function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to={ADMIN_PATH} replace />;

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await login(form);
      navigate(location.state?.from?.pathname || ADMIN_PATH, { replace: true });
    } catch (error) {
      setMessage(getPublicErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <Link to="/">Volver al portfolio</Link>
        <h1>Panel privado</h1>
        <p>Ingresar con la cuenta administrativa. El navegador puede recordar tus datos si elegis guardarlos.</p>
        <label>
          Correo
          <input
            name="email"
            type="email"
            autoComplete="username"
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>
        <label>
          Contrasena
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            minLength="10"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
          />
        </label>
        <button className="button button--primary" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </main>
  );
}
