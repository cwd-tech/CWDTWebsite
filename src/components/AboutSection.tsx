import type { SiteContent } from '../content/siteContent';
import { MediaPlaceholder } from './MediaPlaceholder';

interface AboutSectionProps {
  content: SiteContent['about'];
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="about-section section-padding" id="about" aria-labelledby="about-title">
      <div className="about-section__inner page-container">
        <div className="about-section__visual">
          <MediaPlaceholder label={content.visualLabel} variant="story" />
          <span className="about-section__visual-note" aria-hidden="true">CWDT / 澄叡</span>
        </div>
        <div className="about-section__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="about-title">{content.title}</h2>
          <p>{content.description}</p>
          <a className="text-link" href="#contact">
            認識更多 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
