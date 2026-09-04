import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ShowcaseSection } from "../features/showcase/components/ShowcaseSection";

export function ServicesPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ShowcaseSection
        eyebrow="Servicios"
        title="Soluciones digitales para negocios, equipos y proyectos."
        description="Desarrollo webs, sistemas, automatizaciones, chatbots y documentacion tecnica con foco en orden, conversion, mantenimiento y mejora continua."
        items={data.services}
      />
    </PageShell>
  );
}
