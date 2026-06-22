import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";
import { ProjectsSection } from "../features/projects/components/ProjectsSection";

export function ProjectsPage() {
  const { data } = usePortfolio();

  return (
    <PageShell>
      <ProjectsSection projects={data.projects} />
    </PageShell>
  );
}
