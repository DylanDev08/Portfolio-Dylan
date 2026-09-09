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
        title="Una buena automatización elimina pasos, errores y seguimiento manual innecesario."
        description="La herramienta viene después: primero reviso dónde se repite trabajo, dónde se pierde información y qué parte del flujo conviene conectar."
        ctaLabel="Revisar un proceso"
      />
    </PageShell>
  );
}
