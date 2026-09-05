import { ConversionCta } from "../components/common/ConversionCta";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ShowcaseSection } from "../features/showcase/components/ShowcaseSection";

export function ServicesPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ShowcaseSection
        eyebrow="Servicios"
        title="Soluciones pensadas desde el problema, no desde la herramienta."
        description="Primero defino qué necesita mejorar el proceso; después elijo la tecnología adecuada para construir una solución clara, usable y mantenible."
        items={data.services}
      />
      <ConversionCta
        eyebrow="Trabajemos sobre el problema"
        title="No necesitás definir el stack para empezar."
        description="Con una explicación del proceso actual, los usuarios y el resultado esperado alcanza para plantear una primera solución y evaluar el alcance."
        ctaLabel="Contarme el proyecto"
      />
    </PageShell>
  );
}
