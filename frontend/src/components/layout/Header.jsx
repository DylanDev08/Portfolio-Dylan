import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Inicio", "/"],
  ["Proyectos", "/proyectos"],
  ["Servicios", "/servicios"],
  ["Experiencia", "/experiencia"],
  ["Docs", "/documentacion"],
  ["Contacto", "/contacto"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" to="/" aria-label="Dylan Salcedo - Inicio">
          <img className="brand__mark" src="/brand/ds-logo.svg" alt="" width="44" height="44" />
          <span className="brand__text">
            <strong>Dylan Salcedo</strong>
            <small>Full Stack · Soluciones digitales</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? "Cerrar" : "Menú"}
        </button>

        <nav id="primary-navigation" className={open ? "navigation navigation--open" : "navigation"} aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
