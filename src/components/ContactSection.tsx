import type { SiteContent } from '../content/siteContent';

interface ContactSectionProps {
  content: SiteContent['contact'];
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className="contact-section section-padding" id="contact" aria-labelledby="contact-title">
      <div className="contact-section__inner page-container">
        <div className="contact-section__intro">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="contact-title">{content.title}</h2>
        </div>
        <address className="contact-details">
          {content.details.map((detail) => (
            <div className="contact-details__item" key={detail.id}>
              <span className="contact-details__label">{detail.label}</span>
              {detail.href ? (
                <a href={detail.href}>{detail.value}</a>
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          ))}
        </address>
      </div>
    </section>
  );
}
