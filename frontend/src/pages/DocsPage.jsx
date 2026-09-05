import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ShowcaseSection } from "../features/showcase/components/ShowcaseSection";

export function DocsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ShowcaseSection
        eyebrow="Documentación"
        title="Documentación real de proyectos publicados o en desarrollo."
        description="Acá no muestro plantillas ficticias: cada card abre un README o documento versionado que existe dentro de un repositorio público."
        items={data.documentations}
      />
    </PageShell>
  );
}
