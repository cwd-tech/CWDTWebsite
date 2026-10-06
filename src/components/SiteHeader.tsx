import { useState } from 'react';
import type { NavItem, SiteContent } from '../content/siteContent';

interface SiteHeaderProps {
  brand: SiteContent['brand'];
  navigation: NavItem[];
}

export function SiteHeader({ brand, navigation }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label={`${brand.english} ${brand.chinese}，回到首頁`}>
          <span className="brand__mark" aria-hidden="true">C</span>
          <span className="brand__text">
            <span className="brand__english">{brand.english}</span>
            <span className="brand__chinese">{brand.chinese}</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="主要導覽"
        >
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="primary-navigation__contact" href="#contact" onClick={() => setIsMenuOpen(false)}>
            與我們聯絡 <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
