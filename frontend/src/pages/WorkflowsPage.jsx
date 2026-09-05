import { ConversionCta } from "../components/common/ConversionCta";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ShowcaseSection } from "../features/showcase/components/ShowcaseSection";

export function WorkflowsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ShowcaseSection
        eyebrow="Automatizaciones"
        title="Ejemplos sanitizados de cómo estructuro workflows y flujos de datos."
        description="Estos recursos muestran criterio de automatización sin presentarlos como implementaciones públicas de clientes ni exponer credenciales, webhooks o datos sensibles."
        items={data.workflows}
      />
      <ConversionCta
        eyebrow="Automatización aplicada"
        title="Una buena automatización elimina pasos, no agrega otra herramienta difícil de mantener."
        description="Podemos revisar qué tareas repetitivas, consultas o movimientos de datos vale la pena automatizar y cuáles conviene dejar manuales."
        ctaLabel="Revisar un proceso"
      />
    </PageShell>
  );
}
