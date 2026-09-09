import { ConversionCta } from "../components/common/ConversionCta";
import { PageShell } from "../components/layout/PageShell";
import { AutomationSection } from "../features/automation/components/AutomationSection";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";

export function WorkflowsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <AutomationSection automations={data.workflows} />
      <ConversionCta
        eyebrow="Automatización aplicada"
        title="Automatizá procesos repetitivos sin perder control sobre la operación."
        description="Analizo el proceso, identifico tareas manuales y puntos de pérdida de información, y diseño una solución que conecte las herramientas necesarias con reglas claras, trazabilidad y posibilidad de escalar."
        ctaLabel="Evaluar una automatización"
      />
    </PageShell>
  );
}
