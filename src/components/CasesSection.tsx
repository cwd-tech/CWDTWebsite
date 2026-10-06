import type { ContentCard, SiteContent } from '../content/siteContent';
import { MediaPlaceholder } from './MediaPlaceholder';

interface CasesSectionProps {
  content: SiteContent['cases'];
}

function CaseCard({ item }: { item: ContentCard }) {
  return (
    <article className="case-card">
      <MediaPlaceholder label={item.visualLabel} variant="card" />
      <div className="case-card__copy">
        <div>
          <p className="eyebrow">{item.eyebrow}</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <span className="case-card__arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  );
}

export function CasesSection({ content }: CasesSectionProps) {
  return (
    <section className="cases-section section-padding" id="cases" aria-labelledby="cases-title">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="cases-title">{content.title}</h2>
        </div>
        <div className="case-grid">
          {content.items.map((item) => <CaseCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
