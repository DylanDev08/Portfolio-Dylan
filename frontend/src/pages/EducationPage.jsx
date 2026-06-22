import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { EducationSection } from "../features/education/components/EducationSection";

export function EducationPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <EducationSection items={data.education} />
    </PageShell>
  );
}
