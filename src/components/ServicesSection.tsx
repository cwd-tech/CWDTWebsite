import type { ContentCard, SiteContent } from '../content/siteContent';
import { MediaPlaceholder } from './MediaPlaceholder';

interface ServicesSectionProps {
  content: SiteContent['services'];
}

function ServiceCard({ item }: { item: ContentCard }) {
  return (
    <article className="service-card">
      <MediaPlaceholder label={item.visualLabel} variant="card" />
      <div className="service-card__copy">
        <p className="eyebrow">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <span className="service-card__arrow" aria-hidden="true">↗</span>
    </article>
  );
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="services-section section-padding" id="services" aria-labelledby="services-title">
      <div className="page-container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id="services-title">{content.title}</h2>
          </div>
          <p className="section-heading__description">{content.description}</p>
        </div>
        <MediaPlaceholder label={content.visualLabel} variant="story" />
        <div className="service-grid">
          {content.items.map((item) => <ServiceCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
