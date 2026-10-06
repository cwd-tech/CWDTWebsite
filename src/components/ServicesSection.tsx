import type { ContentCard, SiteContent } from '../content/siteContent';

interface ServicesSectionProps {
  content: SiteContent['services'];
}

function ServiceCard({ item }: { item: ContentCard }) {
  return (
    <article className="service-card">
      <div className="solution-visual">
        <img src={item.imageSrc} alt={item.imageAlt} width="240" height="140" loading="lazy" />
      </div>
      <div className="service-card__copy">
        <p className="eyebrow">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
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
        <div className="solutions-overview">
          <picture>
            <source media="(max-width: 600px)" srcSet={content.imageMobileSrc} width="1536" height="1024" />
            <img src={content.imageSrc} alt={content.imageAlt} width="2172" height="724" loading="lazy" />
          </picture>
        </div>
        <div className="service-grid">
          {content.items.map((item) => <ServiceCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
