const projectPresentation = {
  "Materiales FZAC": {
    decisions: [
        {
            "title": "Validación del lado servidor",
            "detail": "Los datos sensibles de pedidos, precios y disponibilidad se verifican en el backend en lugar de confiar en los valores enviados por el navegador."
        },
        {
            "title": "Operación y administración separadas",
            "detail": "El catálogo público y las tareas de gestión usan permisos distintos, con autenticación y controles de acceso para operaciones administrativas."
        },
        {
            "title": "Flujo comercial adaptable",
            "detail": "El recorrido de compra prioriza el pedido y la coordinación por WhatsApp, sin confundir una solicitud con un pago confirmado."
        }
    ],
    galleryItems: [
        {
            "src": "https://raw.githubusercontent.com/DylanDev08/Materiales-FZAC/main/public/products/cemento-50kg.svg",
            "label": "Catálogo de materiales",
            "description": "Recurso gráfico público utilizado para ilustrar una ficha de producto. No es una captura de la interfaz."
        }
    ],
    accent: "#f4b942",
    accentRgb: "244,185,66",
    surface: "#17130b",
    coverImage: "https://raw.githubusercontent.com/DylanDev08/Materiales-FZAC/main/public/fzac-storefront-hero.webp",
    coverFallback: "/projects/materiales-fzac.svg",
    coverPosition: "center top",
    coverFit: "cover",
    coverLabel: "E-commerce y operación comercial",
    problem: "El catálogo, el stock, los pedidos y el seguimiento comercial necesitaban dejar de depender de consultas y tareas separadas.",
    solution: "Desarrollé un e-commerce Full Stack que integra catálogo, carrito, checkout, cuentas, administración, stock, tickets, asistencia y flujos de pago dentro de una misma operación.",
    value: "Centraliza venta y gestión comercial, reduce tareas manuales y mejora la trazabilidad de productos, pedidos y usuarios.",
    docsLabel: "README técnico",
  },
  "Portfolio FZAC": {
    decisions: [
        {
            "title": "Contenido editable sin programar",
            "detail": "El panel administra obras, descripciones y galerías para que el equipo actualice el portfolio sin editar el código fuente."
        },
        {
            "title": "Control de acceso a la gestión",
            "detail": "Las operaciones administrativas están separadas del sitio público y requieren una sesión autorizada."
        },
        {
            "title": "Imágenes organizadas por obra",
            "detail": "Las galerías agrupan material visual por proyecto y permiten mostrar tanto locales comerciales como obras residenciales."
        }
    ],
    galleryItems: [
        {
            "src": "https://raw.githubusercontent.com/DylanDev08/FZAC-Portfolio/main/frontend/public/assets/img/obras/marvel-pellegrini/marvel-pellegrini-02.jpg",
            "label": "Galería de una obra",
            "description": "Foto real incluida en las galerías públicas del portfolio de Fortaleza Construcciones."
        },
        {
            "src": "https://raw.githubusercontent.com/DylanDev08/FZAC-Portfolio/main/frontend/public/assets/img/obras/sliders-jujuy/sliders-jujuy-final-01.jpg",
            "label": "Obra comercial · Sliders",
            "description": "Fotografía publicada del resultado de una de las obras comerciales."
        }
    ],
    coverImage: "https://image.thum.io/get/width/1200/crop/675/maxAge/24/noanimate/https://fzac-portfolio-1.onrender.com",
    coverFallback: "https://raw.githubusercontent.com/DylanDev08/FZAC-Portfolio/main/frontend/public/assets/img/obras/marvel-pellegrini/marvel-pellegrini-02.jpg",
    accent: "#d8ad52",
    accentRgb: "216,173,82",
    surface: "#15120c",
    coverPosition: "center top",
    coverFit: "cover",
    coverLabel: "Home de FZAC · galerías de obras",
    problem: "Fortaleza Construcciones necesitaba presentar obras y servicios con una imagen profesional y mantener el contenido actualizado sin depender de editar código.",
    solution: "Desarrollé un portfolio institucional con galerías por obra, contenido administrable, panel privado, CRUD, autenticación y gestión de imágenes.",
    value: "La empresa puede comunicar mejor su trabajo, actualizar proyectos y galerías desde un entorno protegido y sostener una presencia digital comercial consistente.",
    docsLabel: "README técnico",
  },
  "Mangas MaxDy": {
    accent: "#ef476f",
    accentRgb: "239,71,111",
    surface: "#180b14",
    coverPosition: "center center",
    coverFit: "cover",
    coverLabel: "Interfaz del producto",
    statusLabel: "Caso técnico",
    problem: "La experiencia de lectura, catálogo, comunidad y administración necesitaba convivir dentro de una sola plataforma.",
    solution: "Desarrollé una aplicación Full Stack con usuarios, autenticación, mangas, capítulos, favoritos, progreso, rankings, comentarios, roles y administración.",
    value: "Reúne contenido, cuenta de usuario, comunidad y gestión en una arquitectura única preparada para crecer por módulos.",
    docsLabel: "README técnico",
  },
  "FuckTheSys": {
    decisions: [
        {
            "title": "Plataforma elegida según el objetivo",
            "detail": "La solución usa TiendaNube para priorizar catálogo, recorrido de compra y administración comercial, sin construir un checkout propio innecesario."
        },
        {
            "title": "Recorrido simple desde mobile",
            "detail": "La estructura organiza la navegación del catálogo y facilita el paso desde descubrir productos a iniciar una compra."
        }
    ],
    coverImage: "https://image.thum.io/get/width/1200/crop/675/maxAge/24/noanimate/https://fuckthesys.mitiendanube.com",
    coverFallback: "/projects/fuckthesys.svg",
    accent: "#f04444",
    accentRgb: "240,68,68",
    surface: "#190b0d",
    coverPosition: "center top",
    coverFit: "cover",
    coverLabel: "Tienda online publicada",
    problem: "La marca necesitaba transformar el tráfico que llegaba desde redes en un catálogo navegable y una compra clara desde el celular.",
    solution: "Organicé y personalicé la tienda sobre TiendaNube, trabajando estructura comercial, navegación, catálogo, identidad visual y recorrido de compra.",
    value: "La marca cuenta con un canal de venta directo, mobile-first y preparado para llevar al usuario desde el descubrimiento del producto hasta la compra con menos fricción.",
    repositoryNote: "La solución está implementada sobre TiendaNube, por lo que no corresponde un repositorio público de código independiente.",
    docsLabel: "Caso documentado",
  },
  "Innova Click": {
    decisions: [
        {
            "title": "Jerarquía de servicios",
            "detail": "La información se agrupa para que quienes visitan la web entiendan las propuestas de marketing sin recorrer páginas innecesarias."
        },
        {
            "title": "Llamadas a la acción visibles",
            "detail": "Se priorizan accesos de contacto y una navegación responsive que acompaña el recorrido comercial."
        }
    ],
    coverImage: "https://image.thum.io/get/width/1200/crop/675/maxAge/24/noanimate/https://innovaclick.com.ar",
    coverFallback: "/projects/innova-click.svg",
    accent: "#8b5cf6",
    accentRgb: "139,92,246",
    surface: "#110d1c",
    coverPosition: "center top",
    coverFit: "cover",
    coverLabel: "Sitio comercial publicado",
    problem: "La agencia necesitaba explicar su propuesta de marketing digital con claridad y convertir visitas en consultas comerciales.",
    solution: "Desarrollé y estructuré el sitio sobre WordPress con jerarquía de servicios, navegación responsive, contenido comercial y llamadas a la acción orientadas a contacto.",
    value: "Reduce el esfuerzo necesario para entender la oferta y crea un recorrido más directo entre descubrir un servicio y contactar a la agencia.",
    repositoryNote: "La solución está implementada sobre WordPress, por lo que no corresponde un repositorio público de código independiente.",
    docsLabel: "Caso documentado",
  },
  "BarberHouse": {
    decisions: [
        {
            "title": "Prototipo antes de sumar complejidad",
            "detail": "Se desarrolló una interfaz React enfocada en presentación de servicios e identidad, sin anunciar como operativas futuras reservas."
        },
        {
            "title": "Componentes que pueden evolucionar",
            "detail": "La estructura permite ampliar el sitio con nuevas funciones cuando se definan las necesidades del negocio."
        }
    ],
    coverImage: "https://image.thum.io/get/width/1200/crop/675/maxAge/24/noanimate/https://barber-house-pi.vercel.app",
    coverFallback: "/projects/barberhouse.svg",
    accent: "#d6a15c",
    accentRgb: "214,161,92",
    surface: "#17120d",
    coverPosition: "center top",
    coverFit: "cover",
    coverLabel: "Interfaz del producto",
    statusLabel: "Producto en evolución",
    problem: "Una barbería necesita comunicar servicios, identidad y disponibilidad de forma clara, especialmente para usuarios que llegan desde mobile.",
    solution: "Desarrollé una interfaz React responsive con identidad visual, presentación de servicios y una arquitectura preparada para incorporar reservas y gestión operativa.",
    value: "Ofrece una base comercial clara y extensible para transformar la presencia digital en un canal de captación y futura gestión de turnos.",
    deploymentNote: "La arquitectura está preparada para incorporar reservas, disponibilidad, gestión de turnos y automatizaciones comerciales como siguientes capacidades del producto.",
    docsLabel: "README del proyecto",
  },
  Viagelato: {
    decisions: [
        {
            "title": "Solicitudes, no pagos simulados",
            "detail": "El carrito prepara la solicitud por WhatsApp y deja la coordinación comercial a una persona; abrir el enlace no equivale a confirmar un pedido o un pago."
        },
        {
            "title": "Validación de datos en el servidor",
            "detail": "El sistema comprueba productos, cantidades y condiciones comerciales antes de registrar una solicitud."
        },
        {
            "title": "Acceso administrativo protegido",
            "detail": "Las operaciones de productos y gestión están separadas de la navegación pública mediante roles y políticas de base de datos."
        }
    ],
    galleryItems: [
        {
            "src": "https://raw.githubusercontent.com/DylanDev08/Viagelato/main/public/catalogo/alfajor-helado-1.webp",
            "label": "Fotografía de catálogo",
            "description": "Imagen de producto utilizada por el proyecto. No es una captura de la aplicación ni evidencia de stock."
        },
        {
            "src": "https://raw.githubusercontent.com/DylanDev08/Viagelato/main/public/catalogo/balde-3lts-bn-fl-gr.webp",
            "label": "Presentación de producto",
            "description": "Imagen pública de otra presentación de catálogo; no refleja disponibilidad actual."
        }
    ],
    accent: "#d8d8d8",
    accentRgb: "216,216,216",
    surface: "#111111",
    coverPosition: "center center",
    coverFit: "cover",
    coverLabel: "Vista conceptual · en preparación",
    docsLabel: "README del proyecto",
  },
  Budgetly: {
    decisions: [
        {
            "title": "Módulos financieros independientes",
            "detail": "El diseño separa las áreas de información financiera y objetivos para evolucionar el producto por etapas."
        },
        {
            "title": "Alcance transparente",
            "detail": "La ficha distingue la base actual del desarrollo de las funcionalidades previstas, evitando mostrar un roadmap como producto terminado."
        }
    ],
    accent: "#35c78a",
    accentRgb: "53,199,138",
    surface: "#091812",
    coverPosition: "center center",
    coverFit: "contain",
    coverBackground: "linear-gradient(135deg,#071711,#0d241a)",
    coverLabel: "Identidad del producto",
    statusLabel: "Producto en evolución",
    problem: "El seguimiento de finanzas personales y metas suele quedar repartido entre herramientas, notas y registros separados.",
    solution: "Desarrollo una aplicación modular con Next.js y Supabase para reunir información financiera, objetivos, formularios y visualización de datos en una sola experiencia.",
    value: "Centraliza el seguimiento financiero personal y crea una base para visualizar evolución, objetivos y decisiones con mayor claridad.",
    deploymentNote: "El producto continúa ampliando sus módulos financieros sobre una arquitectura modular orientada a crecimiento, visualización de datos y nuevas funciones de seguimiento.",
    docsLabel: "README del proyecto",
  },
};

export function projectPresentationFor(project) {
  const presentation = projectPresentation[project.title] || {};
  return {
    ...project,
    ...presentation,
    accent: presentation.accent || "#f4e6b7",
    accentRgb: presentation.accentRgb || "244,230,183",
    surface: presentation.surface || "#141414",
  };
}
