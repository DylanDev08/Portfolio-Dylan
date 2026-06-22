import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ExperienceSection } from "../features/experience/components/ExperienceSection";

export function ExperiencePage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ExperienceSection items={data.workExperiences} />
    </PageShell>
  );
}
