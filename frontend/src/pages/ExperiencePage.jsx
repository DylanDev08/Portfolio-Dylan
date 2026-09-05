import { ConversionCta } from "../components/common/ConversionCta";
import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ExperienceSection } from "../features/experience/components/ExperienceSection";

export function ExperiencePage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ExperienceSection items={data.workExperiences} />
      <ConversionCta
        eyebrow="Oportunidades"
        title="Busco seguir creciendo en equipos donde el software resuelva necesidades reales."
        description="Estoy abierto a roles de desarrollo, sistemas e implementaciones donde pueda aportar y seguir profundizando arquitectura, producto y trabajo en equipo."
        ctaLabel="Contactarme"
      />
    </PageShell>
  );
}
