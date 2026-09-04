import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ShowcaseSection } from "../features/showcase/components/ShowcaseSection";

export function WorkflowsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ShowcaseSection
        eyebrow="Workflows y automatizaciones"
        title="Flujos, chatbots y datos pensados para ahorrar tiempo."
        description="Ejemplos de automatizaciones publicables y sanitizadas: sin credenciales, sin webhooks reales y sin datos sensibles de clientes."
        items={data.workflows}
      />
    </PageShell>
  );
}
