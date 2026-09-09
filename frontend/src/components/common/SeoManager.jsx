import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePortfolio } from "../../features/portfolio/hooks/usePortfolio";
import { projectSlug } from "../../features/projects/utils/projectSlug";

const SITE_URL = "https://portfolio-dylan-ten.vercel.app";

const routeSeo = {
  "/": {
    title: "Dylan Salcedo | Full Stack y soluciones digitales",
    description: "Portfolio de Dylan Salcedo: e-commerce, sistemas web, automatización y datos con proyectos verificables, GitHub y documentación pública.",
  },
  "/proyectos": {
    title: "Proyectos | Dylan Salcedo",
    description: "Casos de desarrollo web con problema, solución, valor, tecnologías, demos, repositorios y documentación verificable.",
  },
  "/servicios": {
    title: "Servicios | Dylan Salcedo",
    description: "Desarrollo de apps web, e-commerce, sistemas internos, automatizaciones, datos y presencia digital orientados a resolver procesos reales.",
  },
  "/experiencia": {
    title: "Experiencia | Dylan Salcedo",
    description: "Experiencia de Dylan Salcedo en desarrollo Full Stack, sistemas internos, e-commerce, automatización de datos y soporte de sistemas.",
  },
  "/documentacion": {
    title: "Documentación técnica | Dylan Salcedo",
    description: "READMEs y documentación real de proyectos públicos: arquitectura, seguridad, despliegue, operación y decisiones técnicas.",
  },
  "/contacto": {
    title: "Contacto | Dylan Salcedo",
    description: "Contacto profesional de Dylan Salcedo para oportunidades laborales, colaboraciones y proyectos de software.",
  },
  "/sobre-mi": {
    title: "Sobre mí | Dylan Salcedo",
    description: "Perfil profesional de Dylan Salcedo, Full Stack Developer y estudiante de Ingeniería en Sistemas Informáticos en Rosario.",
  },
  "/skills": {
    title: "Tecnologías | Dylan Salcedo",
    description: "Tecnologías y herramientas utilizadas por Dylan Salcedo en frontend, backend, datos, automatización y despliegue.",
  },
  "/automatizaciones": {
    title: "Automatizaciones | Dylan Salcedo",
    description: "Ejemplos sanitizados de workflows, APIs, Google Sheets, n8n y flujos de automatización sin exponer credenciales privadas.",
  },
  "/formacion": {
    title: "Formación | Dylan Salcedo",
    description: "Ingeniería en Sistemas Informáticos y formación complementaria en desarrollo web de Dylan Salcedo.",
  },
};

function setMeta(name, value, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export function SeoManager() {
  const location = useLocation();
  const { data } = usePortfolio();

  useEffect(() => {
    let seo = routeSeo[location.pathname];

    if (!seo && location.pathname.startsWith("/proyectos/")) {
      const slug = location.pathname.split("/").filter(Boolean)[1];
      const project = data.projects.find((item) => projectSlug(item.title) === slug);
      if (project) {
        seo = {
          title: `${project.title} | Caso de proyecto · Dylan Salcedo`,
          description: `${project.problem} ${project.value}`.slice(0, 158),
        };
      }
    }

    seo ||= {
      title: "Dylan Salcedo | Full Stack Developer",
      description: "Portfolio profesional de Dylan Salcedo.",
    };

    const canonicalUrl = `${SITE_URL}${location.pathname === "/" ? "/" : location.pathname}`;
    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [data.projects, location.pathname]);

  return null;
}
