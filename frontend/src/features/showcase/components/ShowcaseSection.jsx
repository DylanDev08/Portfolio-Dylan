import { SectionTitle } from "../../../components/common/SectionTitle";
import { ShowcaseCard } from "./ShowcaseCard";

export function ShowcaseSection({ eyebrow, title, description, items = [], emptyLabel = "Todavia no hay recursos cargados." }) {
  return (
    <section className="section showcase-section">
      <div className="container">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />

        {items.length > 0 ? (
          <div className="showcase-grid">
            {items.map((item) => (
              <ShowcaseCard key={item.id || item.title} item={item} />
            ))}
          </div>
        ) : (
          <p className="showcase-empty">{emptyLabel}</p>
        )}
      </div>
    </section>
  );
}
