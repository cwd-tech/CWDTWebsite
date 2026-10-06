import type { NavItem, SiteContent } from '../content/siteContent';

interface SiteFooterProps {
  brand: SiteContent['brand'];
  navigation: NavItem[];
}

export function SiteFooter({ brand, navigation }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner page-container">
        <a className="brand brand--footer" href="#top">
          <span className="brand__mark" aria-hidden="true">C</span>
          <span className="brand__text">
            <span className="brand__english">{brand.english}</span>
            <span className="brand__chinese">{brand.chinese}</span>
          </span>
        </a>
        <nav className="site-footer__nav" aria-label="頁尾導覽">
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </nav>
        <p className="site-footer__copyright">© CWDT 澄叡｜版權資訊待提供</p>
      </div>
    </footer>
  );
}
