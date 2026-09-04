import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ShowcaseSection } from "../features/showcase/components/ShowcaseSection";

export function DocsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ShowcaseSection
        eyebrow="Documentacion"
        title="Documentacion para que los proyectos se puedan mantener."
        description="Ademas de desarrollar, documento arquitectura, APIs, instalacion, deploy, paneles administrativos y workflows para que el trabajo quede claro y reutilizable."
        items={data.documentations}
      />
    </PageShell>
  );
}
