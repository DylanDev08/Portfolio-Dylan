import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { SkillsSection } from "../features/skills/components/SkillsSection";

export function SkillsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <SkillsSection skills={data.skills} />
    </PageShell>
  );
}
