import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [["Inicio","/"],["Proyectos","/proyectos"],["Servicios","/servicios"],["Habilidades","/skills"],["Automatización","/automatizaciones"],["Contacto","/contacto"]];
const adtechSections = [["Acerca de nosotros","nosotros"],["Trabajos","trabajos"],["Servicios","servicios"],["Precios y planes","precios"],["Redes sociales","redes"],["Solicitar presupuesto","presupuesto"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [adtechOpen, setAdtechOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  useEffect(() => { setOpen(false); setAdtechOpen(false); }, [location.pathname, location.hash]);
  useEffect(() => {
    if (location.pathname !== "/adtech" || !location.hash) return;
    const targetId = decodeURIComponent(location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ block: "start" }));
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open && !adtechOpen) return;
    const escape = (event) => { if (event.key === "Escape") { setOpen(false); setAdtechOpen(false); } };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open, adtechOpen]);
  useEffect(() => {
    if (!open && !adtechOpen) return;
    const closeOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setAdtechOpen(false);
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open, adtechOpen]);
  return (
    <header ref={headerRef} className="site-header">
      <div className="container navbar">
        <Link className="brand" to="/" aria-label="Dylan Salcedo - Inicio">
          <img className="brand__mark" src="/brand/ds-logo.svg" alt="" width="44" height="44" />
          <span className="brand__text"><strong>Dylan Salcedo</strong><small>Full Stack · Soluciones digitales</small></span>
        </Link>
        <button className="menu-button" type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? "Cerrar" : "Menú"}</button>
        <nav id="primary-navigation" className={open ? "navigation navigation--open" : "navigation"} aria-label="Navegación principal">
          {links.slice(0,5).map(([label,href]) => <NavLink key={href} to={href} end={href === "/"} className={({isActive}) => isActive ? "active" : undefined} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <div ref={dropdownRef} className="navigation-dropdown">
            <NavLink to="/adtech" className={({isActive}) => isActive ? "active" : undefined} onClick={() => { setOpen(false); setAdtechOpen(false); }}>AdTech</NavLink>
            <button type="button" className="navigation-dropdown__toggle" aria-expanded={adtechOpen} aria-controls="adtech-subnav" aria-label={adtechOpen ? "Cerrar secciones de AdTech" : "Mostrar secciones de AdTech"} onClick={() => setAdtechOpen(value => !value)}>{adtechOpen ? "⌃" : "⌄"}</button>
            {adtechOpen && <div id="adtech-subnav" className="navigation-dropdown__menu">
              {adtechSections.map(([label,id]) => <Link key={id} to={"/adtech#"+id} onClick={() => { setOpen(false); setAdtechOpen(false); }}>{label}</Link>)}
            </div>}
          </div>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : undefined} onClick={() => setOpen(false)}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
