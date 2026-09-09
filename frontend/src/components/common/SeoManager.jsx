import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePortfolio } from "../../features/portfolio/hooks/usePortfolio";
import { projectSlug } from "../../features/projects/utils/projectSlug";

const SITE_URL = "https://portfolio-dylan-ten.vercel.app";

const routeSeo = {
  "/": {
    title: "Dylan Salcedo | Software, web y automatización",
    description: "Desarrollo soluciones de software, e-commerce, sistemas web y automatización para mejorar ventas, operación, atención y control de datos. Proyectos reales y ADTech.",
  },
  "/proyectos": {
    title: "Proyectos, productos y soluciones | Dylan Salcedo",
    description: "Casos de desarrollo a medida, WordPress, TiendaNube y productos en evolución con necesidad, solución, valor, acceso al producto, repositorio y documentación cuando corresponde.",
  },
  "/servicios": {
    title: "Desarrollo web, software y automatización | Dylan Salcedo",
    description: "Desarrollo web, e-commerce, sistemas internos, automatizaciones e integraciones orientadas a ventas, operación, atención y gestión de información.",
  },
  "/adtech": {
    title: "ADTech | Software y automatización para negocios",
    description: "ADTech desarrolla sitios, e-commerce, software a medida, automatizaciones y sistemas de gestión orientados a resolver necesidades concretas de negocio.",
  },
  "/experiencia": {
    title: "Experiencia | Dylan Salcedo",
    description: "Experiencia en soluciones Full Stack, sistemas internos, e-commerce, automatización de datos y soporte de sistemas.",
  },
  "/documentacion": {
    title: "Documentación técnica | Dylan Salcedo",
    description: "READMEs y documentación de proyectos públicos: arquitectura, seguridad, despliegue, operación y decisiones técnicas.",
  },
  "/contacto": {
    title: "Contacto y ADTech | Dylan Salcedo",
    description: "Contacto para proyectos, oportunidades laborales y soluciones de software, web, e-commerce y automatización. ADTech @adtech.ros.",
  },
  "/sobre-mi": {
    title: "Sobre mí | Dylan Salcedo",
    description: "Dylan Salcedo, Full Stack Developer y estudiante de Ingeniería en Sistemas Informáticos en Rosario, orientado a resolver problemas con software.",
  },
  "/skills": {
    title: "Habilidades y tecnologías | Dylan Salcedo",
    description: "Stack aplicado en frontend, backend, bases de datos, despliegue y automatización, respaldado por proyectos y repositorios públicos.",
  },
  "/automatizaciones": {
    title: "Automatización de procesos | Dylan Salcedo",
    description: "Soluciones de automatización para atención, datos, seguimiento y operación con n8n, APIs, Google Sheets, scripts, WhatsApp e integraciones a medida.",
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
          title: `${project.title} | Solución, valor e implementación · Dylan Salcedo`,
          description: `${project.problem} ${project.value}`.slice(0, 158),
        };
      }
    }

    seo ||= {
      title: "Dylan Salcedo | Full Stack Developer",
      description: "Portfolio profesional de Dylan Salcedo orientado a desarrollo de soluciones digitales, productos y automatización.",
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
