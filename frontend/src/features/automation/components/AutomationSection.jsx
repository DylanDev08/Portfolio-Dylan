import { SectionTitle } from "../../../components/common/SectionTitle";

const realCases = [
  { id:"jefe", title:"Asistente administrativo FZAC", category:"Validación de datos · IA", image:"/workflows/fzac-entrada-jefe.webp", problem:"Recibir datos operativos enviados por el responsable sin incorporar registros incompletos.", solution:"Webhook, normalización de entrada, interpretación de texto y fotos, validaciones y bifurcación entre registro y revisión.", tools:["n8n","Webhooks","IA","Validación"] },
  { id:"reportes", title:"Consolidación operativa y reportes", category:"Datos · Reportes", image:"/workflows/fzac-reportes.webp", problem:"Consolidar información que proviene de múltiples fuentes y estructuras.", solution:"Lectura y transformación de datos, unificación de ramas y preparación de salidas y reportes.", tools:["n8n","Google Sheets","Google Drive","Transformaciones"] },
  { id:"meta", title:"Integración de mensajería Meta", category:"Mensajería · Integraciones", image:"/workflows/fzac-meta.webp", problem:"Procesar eventos de mensajería y responder o derivar según la información recibida.", solution:"Webhooks de verificación y recepción, normalización de mensajes y rutas para respuestas y notificaciones.", tools:["n8n","Meta","Webhooks","Gmail"] },
  { id:"whatsapp", title:"Asistente WhatsApp FZAC", category:"Atención · Domótica", image:"/workflows/fzac-whatsapp.webp", problem:"Organizar respuestas y comandos rápidos sin depender de operaciones manuales repetitivas.", solution:"Motor de decisión que prepara texto, botones o listas interactivas; incluye una rama opcional para leads.", tools:["n8n","WhatsApp","APIs","Automatización"] },
];
export function AutomationSection() {
  return (
    <section className="section automation-section" id="automatizaciones">
      <div className="container">
        <SectionTitle eyebrow="Automatización aplicada · Casos reales" title="Workflows diseñados para operaciones reales." description="Una selección de mis flujos en n8n: captura, transformación, validación y comunicación entre sistemas. Las capturas muestran la estructura de los flujos; algunas integraciones pueden estar en configuración o evolución." headingLevel="h1" />
        <div className="adtech-workflow-grid">
          {realCases.map(item => <article className="adtech-workflow-card" key={item.id}>
            <div className="adtech-workflow-media"><img src={item.image} alt={"Captura del workflow n8n: " + item.title} loading="lazy" onError={event => { event.currentTarget.style.display="none"; event.currentTarget.parentElement.classList.add("adtech-workflow-media--pending"); }} /></div>
            <div className="adtech-workflow-body">
              <span className="eyebrow">{item.category}</span><h2>{item.title}</h2>
              <p><strong>Necesidad:</strong> {item.problem}</p><p><strong>Implementación:</strong> {item.solution}</p>
              <div className="badges">{item.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
