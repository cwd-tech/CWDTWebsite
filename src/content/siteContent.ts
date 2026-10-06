export interface NavItem {
  id: string;
  label: string;
}

export interface ContentCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  visualLabel: string;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface HeroContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTarget: string;
  visualLabel: string;
}

export interface StoryContent {
  eyebrow: string;
  title: string;
  description: string;
  visualLabel: string;
}

export interface SiteContent {
  brand: { english: string; chinese: string };
  navigation: NavItem[];
  hero: HeroContent;
  about: StoryContent;
  services: StoryContent & { items: ContentCard[] };
  cases: { eyebrow: string; title: string; items: ContentCard[] };
  contact: { eyebrow: string; title: string; details: ContactDetail[] };
}

export const siteContent: SiteContent = {
  brand: { english: 'CWDT', chinese: '澄叡' },
  navigation: [
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'cases', label: '合作案例' },
    { id: 'contact', label: '聯絡資訊' },
  ],
  hero: {
    title: '品牌主標題待提供',
    description: '首頁介紹文案待提供。',
    ctaLabel: '探索服務',
    ctaTarget: '#services',
    visualLabel: '主視覺影像待提供',
  },
  about: {
    eyebrow: 'ABOUT CWDT',
    title: '關於澄叡',
    description: '公司介紹文案待提供。',
    visualLabel: '公司介紹圖片待提供',
  },
  services: {
    eyebrow: 'WHAT WE DO',
    title: '服務項目',
    description: '服務介紹文案待提供。',
    visualLabel: '服務主視覺待提供',
    items: [1, 2, 3].map((number) => ({
      id: `service-${number}`,
      eyebrow: `SERVICE 0${number}`,
      title: '服務項目待提供',
      description: '正式內容待提供。',
      visualLabel: '服務圖片待提供',
    })),
  },
  cases: {
    eyebrow: 'SELECTED WORK',
    title: '合作案例',
    items: [1, 2].map((number) => ({
      id: `case-${number}`,
      eyebrow: `CASE 0${number}`,
      title: '合作案例待提供',
      description: '正式內容待提供。',
      visualLabel: '案例圖片待提供',
    })),
  },
  contact: {
    eyebrow: 'CONTACT',
    title: '聯絡資訊',
    details: [{ id: 'contact-method', label: '聯絡方式', value: '聯絡方式待提供。' }],
  },
};
