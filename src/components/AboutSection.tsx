import type { SiteContent } from '../content/siteContent';

interface AboutSectionProps {
  content: SiteContent['about'];
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="about-section section-padding" id="about" aria-labelledby="about-title">
      <div className="about-section__inner page-container">
        <div className="about-section__visual">
          <div className="about-brand">
            <img src={content.imageSrc} alt={content.imageAlt} width="1254" height="1254" loading="lazy" />
          </div>
        </div>
        <div className="about-section__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="about-title">{content.title}</h2>
          <p>{content.description}</p>
          <a className="text-link" href={content.ctaTarget}>
            {content.ctaLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
