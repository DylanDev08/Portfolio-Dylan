import { useState } from "react";
import { Link } from "react-router-dom";
import { GameIntro } from "../components/common/GameIntro";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { HeroSection } from "../features/profile/components/HeroSection";

const menu = [
  ["Sobre mi", "/sobre-mi", "Perfil, objetivo laboral y forma de trabajar."],
  ["Servicios", "/servicios", "Apps web, automatizaciones, chatbots, documentacion y dashboards."],
  ["Skills", "/skills", "Tecnologias, herramientas y habilidades."],
  ["Proyectos", "/proyectos", "Trabajos reales: codigo propio, WordPress, TiendaNube y sistemas."],
  ["Workflows", "/automatizaciones", "n8n, WhatsApp, Instagram, Google Sheets y flujos sanitizados."],
  ["Documentacion", "/documentacion", "Arquitectura, APIs, deploy, manuales y procesos."],
  ["Experiencia", "/experiencia", "Fortaleza Construcciones y freelance."],
  ["Formacion", "/formacion", "Carrera, cursos y base academica."],
  ["Contacto", "/contacto", "GitHub, LinkedIn, WhatsApp, Gmail y CV."],
];

export function HomePage() {
  const { data } = usePortfolio();
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <GameIntro onPlay={() => setIntroDone(true)} />}
      <Header />
      <main>
        <HeroSection profile={data.profile} />
        <section className="section game-menu-section">
          <div className="container">
            <span className="eyebrow">Menu principal</span>
            <h2>Elegir pantalla</h2>
            <div className="game-menu-grid">
              {menu.map(([label, href, description]) => (
                <Link className="game-menu-card" to={href} key={href}>
                  <strong>{label}</strong>
                  <span>{description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
