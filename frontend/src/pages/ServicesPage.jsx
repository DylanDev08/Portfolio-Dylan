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
        title="Desarrollo soluciones digitales para vender, operar y escalar mejor."
        description="Trabajo sobre necesidades concretas: generar más consultas, ordenar ventas, centralizar información, automatizar tareas, integrar herramientas o construir software a medida. El alcance y la tecnología se definen según el objetivo del negocio."
        items={data.services}
        headingLevel="h1"
      />
      <ConversionCta
        eyebrow="Proyecto a medida"
        title="Llevemos tu necesidad a una solución concreta."
        description="Contame cómo funciona hoy el proceso, qué problema querés resolver y qué resultado buscás. A partir de eso puedo plantear una propuesta de desarrollo, alcance y próximos pasos."
        ctaLabel="Solicitar propuesta"
      />
    </PageShell>
  );
}
