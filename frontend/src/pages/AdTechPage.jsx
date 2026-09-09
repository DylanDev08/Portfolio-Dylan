import { PageShell } from "../components/layout/PageShell";
import { usePortfolio } from "../features/portfolio/hooks/usePortfolio";

export function AdTechPage() {
  const { data } = usePortfolio();
  const venture = data.venture;

  if (!venture) return null;

  return (
    <PageShell>
      <section className="section adtech-page">
        <div className="container adtech-page__layout">
          <div className="adtech-page__intro">
            <span className="eyebrow">{venture.eyebrow}</span>
            <h1>{venture.name}</h1>
            <h2>{venture.headline}</h2>
            <p>{venture.description}</p>

            <div className="venture-services" aria-label="Servicios de ADTech">
              {venture.services.map((service) => <span key={service}>{service}</span>)}
            </div>
          </div>

          <aside className="adtech-page__contact" aria-label="Canales de ADTech">
            <span className="eyebrow">Contacto directo</span>
            <h2>¿Tenés una necesidad concreta?</h2>
            <p>Contame el problema, el proceso actual y qué resultado buscás. Desde ahí evaluamos qué solución tiene más sentido.</p>
            <a className="button button--primary" href={venture.whatsappUrl} target="_blank" rel="noreferrer noopener">Hablar por WhatsApp</a>
            <a className="button button--secondary" href={venture.instagramUrl} target="_blank" rel="noreferrer noopener">Instagram {venture.handle}</a>
            <a className="button button--ghost" href={venture.tiktokUrl} target="_blank" rel="noreferrer noopener">TikTok</a>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
