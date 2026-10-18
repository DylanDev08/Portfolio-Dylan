import { useState } from "react";
import { Link } from "react-router-dom";
import { projectSlug } from "../features/projects/utils/projectSlug";
import { projectPresentationFor } from "../features/projects/data/projectPresentation";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";

const offers = [
  { name: "Tiendas con Tiendanube", level: "Implementación sobre plataforma", description: "Configuración de tienda, catálogo, medios de contacto, navegación, identidad visual y acompañamiento para publicar. La plataforma y sus abonos se contratan por separado.", points: ["Salida al mercado más rápida", "Panel de productos y pedidos", "Personalización según las opciones de la plataforma"] },
  { name: "Webs y tiendas con WordPress", level: "Sitio autoadministrable", description: "Sitios institucionales, blogs y tiendas con WooCommerce. Diseño, configuración, contenidos y extensiones según las necesidades del negocio.", points: ["Administración de contenidos", "Integración de formularios y WhatsApp", "Hosting, plugins y mantenimiento a definir"] },
  { name: "Desarrollo a medida con código", level: "Mayor inversión · Máxima personalización", description: "Aplicaciones y sitios desarrollados con React, Node.js, bases de datos y APIs cuando el negocio necesita una experiencia o lógica propia que las plataformas estándar no resuelven.", points: ["Diseño y funcionalidades específicas", "Integraciones y paneles personalizados", "Presupuesto según alcance, pruebas y mantenimiento"] },
];
const extra = [
  ["Automatizaciones", "Flujos con n8n, APIs, alertas y sincronización de información."],
  ["Sistemas de gestión", "Herramientas para clientes, pedidos, inventario y operaciones."],
  ["Catálogos y landing pages", "Páginas comerciales enfocadas en consultas y contacto."],
  ["Integraciones y chatbots", "Conexiones entre servicios y flujos de atención, según disponibilidad de cada plataforma."],
];
const workflowCases = [
  { id: "jefe", title: "Asistente administrativo FZAC", image: "/workflows/fzac-entrada-jefe.webp", label: "Webhook · IA · Validación", description: "Recibe solicitudes del responsable, normaliza la entrada, interpreta texto o foto, comprueba datos obligatorios y deriva la respuesta al registro contable o a revisión.", steps: ["Entrada y normalización", "Interpretación con IA", "Validación y derivación"] },
  { id: "operaciones", title: "Consolidación operativa y reportes", image: "/workflows/fzac-reportes.webp", label: "Hojas de cálculo · Transformaciones · Reportes", description: "Orquesta varias fuentes de datos, las transforma y prepara salidas de seguimiento y reportes. El flujo incluye distintas ramas y controles de procesamiento.", steps: ["Fuentes de datos", "Consolidación", "Salidas y reportes"] },
  { id: "meta", title: "Captación y seguimiento de contactos", image: "/workflows/fzac-meta.webp", label: "Meta · Webhooks · Notificaciones", description: "Integra eventos entrantes de Meta, normalización de mensajes, derivación de contactos y notificaciones. La captura muestra etapas de verificación y configuración.", steps: ["Recepción de eventos", "Normalización", "Derivación y avisos"] },
  { id: "whatsapp", title: "Asistente de WhatsApp y domótica", image: "/workflows/fzac-whatsapp.webp", label: "WhatsApp · Comandos · CRM opcional", description: "Organiza mensajes y comandos rápidos mediante un motor de decisión que prepara respuestas de texto, menús interactivos y un registro de leads opcional.", steps: ["Mensaje entrante", "Motor de decisión", "Respuesta o registro"] },
];
function WorkflowScreenshot({ item }) {
  const [failed, setFailed] = useState(false);
  return <div className="adtech-workflow-media">{!failed ? <img src={item.image} alt={"Captura real del editor n8n: " + item.title} loading="lazy" decoding="async" onError={() => setFailed(true)} /> : <div className="adtech-workflow-fallback" role="img" aria-label={"Captura de " + item.title + " pendiente de publicación"}><span>n8n / WORKFLOW</span><strong>{item.title}</strong><small>Captura pendiente de cargar</small></div>}</div>;
}
const ask = (topic) => "https://wa.me/5493417415857?text=" + encodeURIComponent("Hola, vi AdTech en el portfolio y quiero consultar por " + topic + ".");

export function AdTechPage() {
  const { data } = usePortfolio();
  const venture = data.venture;
  const featuredProjects = data.projects.filter(project => ["Materiales FZAC","Portfolio FZAC","FuckTheSys","Innova Click","BarberHouse"].includes(project.title)).map(projectPresentationFor);
  const [lead, setLead] = useState({ name: "", business: "", service: "Web empresarial", budget: "A definir", details: "" });
  const change = (key, value) => setLead(prev => ({...prev, [key]: value}));
  const send = (event) => {
    event.preventDefault();
    const message = ["Hola AdTech, quiero solicitar un presupuesto.", "Nombre: " + lead.name, "Negocio: " + lead.business, "Servicio: " + lead.service, "Presupuesto: " + lead.budget, "Proyecto: " + (lead.details || "A conversar"), "Origen: portfolio personal"].join("\n");
    window.open("https://wa.me/5493417415857?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  };
  if (!venture) return null;

  return (
    <PageShell>
      <section className="section adtech-page">
        <div className="container">
          <div className="adtech-page__layout">
            <div className="adtech-page__intro">
              <span className="eyebrow">01 / AdTech · Soluciones digitales · Rosario</span>
              <div className="adtech-brand-lockup"><span className="adtech-brand-symbol" aria-hidden="true">A+</span><h1>AdTech<span style={{color:"#f4e6b7"}}>.</span></h1></div>
              <h2>Sitios y sistemas que ayudan a tu negocio a crecer.</h2>
              <p>Creamos páginas web, tiendas online y herramientas digitales para que tus clientes te encuentren, consulten y compren con facilidad.</p>
              <p>Desde Tiendanube y WordPress hasta desarrollo a medida. Te ayudamos a elegir según lo que necesitás y cuánto querés invertir.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#presupuesto">Solicitar presupuesto</a>
                <a className="button button--secondary" href="#trabajos">Ver trabajos</a><Link className="button button--ghost" to="/proyectos">Portfolio personal</Link>
              </div>
            </div>
            <aside className="adtech-page__contact">
              <span className="eyebrow">Contactanos</span>
              <h2>Hablemos de tu proyecto</h2>
              <p>Contanos qué vendés, qué necesitás y qué querés mejorar. Te orientamos sobre la opción más adecuada.</p>
              <a className="button button--primary" href={venture.whatsappUrl} target="_blank" rel="noreferrer noopener">WhatsApp · +54 9 341 741 5857</a>
              <a className="button button--secondary" href={venture.instagramUrl} target="_blank" rel="noreferrer noopener">Instagram · {venture.handle}</a>
              <a className="button button--ghost" href={venture.tiktokUrl} target="_blank" rel="noreferrer noopener">TikTok · {venture.handle}</a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="nosotros" aria-labelledby="adtech-historia">
        <div className="container" style={{maxWidth:920}}>
          <span className="eyebrow">Nuestra historia y propósito</span>
          <h2 id="adtech-historia">De desarrollar proyectos reales a ayudar a otros negocios.</h2>
          <p>AdTech nace como un emprendimiento de desarrollo y soluciones digitales impulsado por la experiencia de crear sitios comerciales, herramientas internas y automatizaciones. La idea es simple: acercar tecnología útil a negocios que quieren crecer sin sumar complejidad innecesaria.</p>
          <p>No proponemos la misma solución para todos. Primero entendemos el negocio y después elegimos si conviene una tienda sobre una plataforma, un sitio autoadministrable o software a medida.</p>
        </div>
      </section>

      <section className="section" id="servicios" aria-labelledby="adtech-servicios-title">
        <div className="container">
          <span className="eyebrow">02 / Elegí tu solución</span>
          <h2 id="adtech-servicios-title">Elegí cómo querés llevar tu negocio a internet</h2>
          <p>Una solución basada en plataforma suele requerir menos desarrollo inicial. Un producto programado a medida demanda más trabajo y una inversión mayor, pero permite personalizar procesos y funcionalidades.</p>
          <div className="route-card-grid adtech-service-grid">
            {offers.map((offer) => (
              <article className="route-card" key={offer.name}>
                <span>{offer.level}</span>
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
                <ul>{offer.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <a href={ask(offer.name)} target="_blank" rel="noreferrer noopener">Consultar esta opción →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="otros-servicios" aria-labelledby="adtech-otros-title">
        <div className="container">
          <span className="eyebrow">Más que páginas web</span>
          <h2 id="adtech-otros-title">Otros servicios de AdTech</h2>
          <div className="route-card-grid">
            {extra.map(([title, description]) => (
              <article className="route-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={ask(title.toLowerCase())} target="_blank" rel="noreferrer noopener">Consultar servicio →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="automatizaciones" aria-labelledby="adtech-automation-title">
        <div className="container">
          <span className="eyebrow">04 / Workflows reales · n8n</span>
          <h2 id="adtech-automation-title">Automatizaciones desarrolladas para operaciones reales</h2>
          <p className="adtech-section-intro">Estos ejemplos corresponden a flujos de trabajo implementados o configurados en n8n. Las capturas muestran su arquitectura visual, no una garantía de que todas las integraciones estén activas en producción.</p>
          <div className="adtech-workflow-grid">
            {workflowCases.map(item => <article className="adtech-workflow-card" key={item.id}>
              <WorkflowScreenshot item={item} />
              <div className="adtech-workflow-body">
                <span className="eyebrow">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ol>{item.steps.map(step => <li key={step}>{step}</li>)}</ol>
                <a href={ask("una automatización similar a " + item.title)} target="_blank" rel="noopener noreferrer">Consultar una solución similar ↗</a>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="trabajos" aria-labelledby="adtech-casos">
        <div className="container">
          <span className="eyebrow">03 / Misiones completadas · Proyectos reales</span>
          <h2 id="adtech-casos">Trabajos reales, resultados que podés explorar</h2>
          <p className="adtech-section-intro">Explorá las webs y tiendas desarrolladas, su enfoque y las tecnologías utilizadas. Algunas siguen evolucionando.</p>
          <div className="route-card-grid adtech-work-grid">
            {featuredProjects.map(project => (
              <article className="route-card adtech-work-card" key={project.id}>
                <div className="adtech-work-card__image">
                  <img src={project.coverImage || project.coverFallback} alt={"Portada del proyecto " + project.title} width="1200" height="675" decoding="async" loading="lazy" onError={event => { const image = event.currentTarget; if (image.dataset.fallback !== "true" && project.coverFallback) { image.dataset.fallback = "true"; image.src = project.coverFallback; } else { image.style.display = "none"; } }} />
                </div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.problem}</p>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visitar proyecto ↗</a>}
                <Link to={"/proyectos/" + projectSlug(project.title)}>Ver caso completo →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="precios" aria-labelledby="adtech-precios-title">
        <div className="container">
          <span className="eyebrow">Planes y presupuestos</span>
          <h2 id="adtech-precios-title">Una solución acorde a tu etapa de negocio</h2>
          <p>No publicamos precios cerrados sin conocer el alcance. Una implementación sobre plataforma suele requerir menor inversión inicial; un desarrollo personalizado requiere más diseño, programación, pruebas y mantenimiento.</p>
          <div className="route-card-grid">
            <article className="route-card"><span>Para empezar</span><h3>Web o landing</h3><p>Presentación profesional, servicios, contacto y llamadas a la acción.</p><a href="#presupuesto">Solicitar cotización →</a></article>
            <article className="route-card"><span>Para vender</span><h3>Tiendanube / WordPress</h3><p>Catálogo, configuración y personalización dentro de una plataforma existente.</p><a href="#presupuesto">Solicitar cotización →</a></article>
            <article className="route-card"><span>Para escalar</span><h3>Desarrollo a medida</h3><p>Funcionalidades específicas, integraciones y sistemas propios con mayor inversión.</p><a href="#presupuesto">Solicitar cotización →</a></article>
          </div>
          <p className="adtech-pricing-note">El dominio, hosting, abonos de plataformas y servicios externos se detallan por separado en cada propuesta.</p>
        </div>
      </section>
      <section className="section" id="redes" aria-labelledby="adtech-redes-title">
        <div className="container">
          <span className="eyebrow">Conectá con AdTech</span><h2 id="adtech-redes-title">Redes sociales y contacto</h2>
          <div className="route-card-grid">
            <a className="route-card" href={venture.instagramUrl} target="_blank" rel="noopener noreferrer"><span>Instagram</span><h3>@adtech.ros</h3><p>Conocé novedades y trabajos.</p><strong>Visitar Instagram ↗</strong></a>
            <a className="route-card" href={venture.tiktokUrl} target="_blank" rel="noopener noreferrer"><span>TikTok</span><h3>@adtech.ros</h3><p>Contenido y soluciones digitales.</p><strong>Visitar TikTok ↗</strong></a>
            <a className="route-card" href={venture.whatsappUrl} target="_blank" rel="noopener noreferrer"><span>Contacto</span><h3>WhatsApp</h3><p>Consultanos por tu proyecto.</p><strong>Escribir a AdTech ↗</strong></a>
          </div>
        </div>
      </section>
      <section className="section adtech-lead-section" id="presupuesto">
        <div className="container adtech-lead-layout">
          <div><span className="eyebrow">Presupuesto personalizado</span><h2>Contanos qué necesitás desarrollar.</h2><p>Completá los datos y abrí tu consulta en WhatsApp. No necesitás registrarte y no guardamos tus respuestas en esta web.</p><Link to="/proyectos" className="button button--secondary">Ver proyectos reales →</Link></div>
          <form className="adtech-lead-form" onSubmit={send}>
            <label htmlFor="lead-name">Tu nombre *</label><input id="lead-name" required maxLength={100} autoComplete="name" value={lead.name} onChange={e=>change("name",e.target.value)} placeholder="Tu nombre" />
            <label htmlFor="lead-business">Nombre del negocio *</label><input id="lead-business" required maxLength={120} value={lead.business} onChange={e=>change("business",e.target.value)} placeholder="Tu emprendimiento" />
            <label htmlFor="lead-service">Servicio</label><select id="lead-service" value={lead.service} onChange={e=>change("service",e.target.value)}>{["Web empresarial","WordPress / WooCommerce","Tiendanube","Desarrollo a código","Catálogo digital","Automatización","Asesoramiento"].map(x=><option key={x}>{x}</option>)}</select>
            <label htmlFor="lead-budget">Presupuesto estimado (ARS)</label><select id="lead-budget" value={lead.budget} onChange={e=>change("budget",e.target.value)}>{["A definir","Hasta $300.000","$300.000 a $700.000","Más de $700.000"].map(x=><option key={x}>{x}</option>)}</select>
            <label htmlFor="lead-details">Descripción del proyecto</label><textarea id="lead-details" rows={4} maxLength={1500} value={lead.details} onChange={e=>change("details",e.target.value)} placeholder="Qué vendés y qué te gustaría implementar..." />
            <button className="button button--primary" type="submit">Continuar por WhatsApp →</button><small>Se abrirá WhatsApp con el mensaje preparado. El envío requiere tu confirmación.</small>
          </form>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="adtech-preguntas">
        <div className="container" style={{maxWidth:920}}>
          <h2 id="adtech-preguntas">Preguntas frecuentes</h2>
          <details><summary>¿Qué conviene: Tiendanube, WordPress o una web a medida?</summary><p>Depende del catálogo, presupuesto, mantenimiento, integraciones y personalización requerida. Te ayudamos a comparar las alternativas antes de presupuestar.</p></details>
          <details><summary>¿Por qué un desarrollo a código cuesta más?</summary><p>Porque implica diseñar, implementar, probar y mantener funcionalidades específicas, en lugar de configurar una plataforma ya construida.</p></details>
          <details><summary>¿El dominio y el hosting están incluidos?</summary><p>Se detallan en cada propuesta. Los costos recurrentes de dominio, hosting, plataforma, plugins o servicios externos se informan por separado.</p></details>
          <details><summary>¿Puedo empezar con algo simple y ampliarlo después?</summary><p>Sí, siempre que la solución elegida permita la evolución que necesitás. Lo evaluamos antes de comenzar.</p></details>
          <div style={{marginTop:28}}><a className="button button--primary" href={ask("una propuesta para mi negocio")} target="_blank" rel="noreferrer noopener">Contanos tu idea por WhatsApp</a></div>
        </div>
      </section>
    </PageShell>
  );
}
