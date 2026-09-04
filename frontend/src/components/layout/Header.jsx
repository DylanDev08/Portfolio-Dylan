import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Inicio", "/"],
  ["Sobre mi", "/sobre-mi"],
  ["Servicios", "/servicios"],
  ["Skills", "/skills"],
  ["Proyectos", "/proyectos"],
  ["Automatizaciones", "/automatizaciones"],
  ["Docs", "/documentacion"],
  ["Experiencia", "/experiencia"],
  ["Contacto", "/contacto"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" to="/">
          <span>DS</span>Dylan Salcedo
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          Menu
        </button>
        <nav className={open ? "navigation navigation--open" : "navigation"}>
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
