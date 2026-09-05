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
    </PageShell>
  );
}
