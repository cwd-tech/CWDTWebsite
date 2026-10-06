import type { SiteContent } from '../content/siteContent';

interface RoadmapSectionProps {
  content: SiteContent['roadmap'];
}

export function RoadmapSection({ content }: RoadmapSectionProps) {
  return (
    <section className="roadmap-section section-padding" id="roadmap" aria-labelledby="roadmap-title">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="roadmap-title">{content.title}</h2>
        </div>
        <ol className="roadmap-grid">
          {content.items.map((item) => (
            <li className="roadmap-step" key={item.id}>
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
