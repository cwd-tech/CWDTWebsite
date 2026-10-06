import type { SiteContent } from '../content/siteContent';
import { MediaPlaceholder } from './MediaPlaceholder';

interface HeroSectionProps {
  content: SiteContent['hero'];
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <MediaPlaceholder label={content.visualLabel} variant="hero" />
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="hero-section__content page-container">
        <p className="eyebrow hero-section__eyebrow">{content.eyebrow}</p>
        <h1 id="hero-title">{content.title}</h1>
        <p className="hero-section__description">{content.description}</p>
        <a className="button button--light" href={content.ctaTarget}>
          {content.ctaLabel} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
