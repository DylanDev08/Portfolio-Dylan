import { ConversionCta } from "../components/common/ConversionCta";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";

export function ProjectsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ProjectsSection projects={data.projects} />
      <ConversionCta
        eyebrow="¿Algo parecido a tu necesidad?"
        title="Un proyecto útil empieza entendiendo bien el contexto."
        description="Podemos tomar una idea, un proceso manual o una operación que hoy está dispersa y evaluar qué solución digital tiene más sentido."
      />
    </PageShell>
  );
}
