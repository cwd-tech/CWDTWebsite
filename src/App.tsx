import { AboutSection } from './components/AboutSection';
import { CasesSection } from './components/CasesSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { siteContent } from './content/siteContent';

export default function App() {
  const { brand, navigation } = siteContent;

  return (
    <>
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <SiteHeader brand={brand} navigation={navigation} />
      <main id="main-content">
        <HeroSection content={siteContent.hero} />
        <AboutSection content={siteContent.about} />
        <ServicesSection content={siteContent.services} />
        <CasesSection content={siteContent.cases} />
        <ContactSection content={siteContent.contact} />
      </main>
      <SiteFooter brand={brand} navigation={navigation} />
    </>
  );
}
