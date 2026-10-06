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
  imageSrc: string;
  imageAlt: string;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface HeroContent {
  eyebrow: string;
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
  brand: { english: string; chinese: string; logoSrc: string; copyright: string };
  navigation: NavItem[];
  hero: HeroContent;
  about: StoryContent & { imageSrc: string; imageAlt: string; ctaLabel: string; ctaTarget: string };
  services: StoryContent & { imageSrc: string; imageMobileSrc: string; imageAlt: string; items: ContentCard[] };
  roadmap: { eyebrow: string; title: string; items: { id: string; eyebrow: string; title: string; description: string }[] };
  contact: { eyebrow: string; title: string; details: ContactDetail[] };
}

export const siteContent: SiteContent = {
  brand: {
    english: 'CWDT',
    chinese: '澄叡數位科技',
    logoSrc: `${import.meta.env.BASE_URL}cwdt-logo-symbol.png`,
    copyright: '© CWDT 澄叡數位科技股份有限公司',
  },
  navigation: [
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '五大解決方案' },
    { id: 'roadmap', label: '導入路徑' },
    { id: 'contact', label: '聯絡資訊' },
  ],
  hero: {
    eyebrow: 'CWDT · 澄叡數位科技',
    title: '智慧製造\n數位轉型解決方案',
    description: '從設備聯網到 AI 決策，打造可量化的製造競爭力。',
    ctaLabel: '探索五大解決方案',
    ctaTarget: '#services',
    visualLabel: 'SMART MANUFACTURING',
  },
  about: {
    eyebrow: 'ABOUT CWDT',
    title: '澄叡數位科技股份有限公司',
    description: '讓每一台設備的數據，都成為下一個決策的起點。整合 MES、APS、EMS、工業 AI 與 OT／IT 資料，讓生產、排程、能源與決策串成一條數據鏈。',
    visualLabel: 'CWDT',
    imageSrc: `${import.meta.env.BASE_URL}cwdt-brand-full.png`,
    imageAlt: 'CWDT 澄叡數位科技股份有限公司，Clear Wise Digital Tech Corporation — Smart Integration',
    ctaLabel: '攜手打造您的智慧工廠',
    ctaTarget: '#contact',
  },
  services: {
    eyebrow: 'SOLUTIONS',
    title: '五大解決方案',
    imageSrc: `${import.meta.env.BASE_URL}solutions-overview-3d.png`,
    imageMobileSrc: `${import.meta.env.BASE_URL}solutions/integration.png`,
    imageAlt: '藍白等角 3D 工業場景，以發光連線串接 CNC 設備、機械手臂、雲端、能源設備與企業工作站',
    description: '以智慧製造、排程、能源、工業 AI 與數位整合，回應製造現場的不同需求。',
    visualLabel: 'MES · APS · EMS · Industrial AI · Digital Integration',
    items: [
      { id: 'mes', eyebrow: '01 / MES', title: '智慧製造', description: '生產執行、品質追溯與工單管理一體化。', visualLabel: 'Smart Manufacturing', imageSrc: `${import.meta.env.BASE_URL}solutions/manufacturing-flat.svg`, imageAlt: '工廠與輸送帶的扁平插畫' },
      { id: 'aps', eyebrow: '02 / APS', title: '智慧排程', description: '混流排程與急單插單模擬。', visualLabel: 'Smart Scheduling', imageSrc: `${import.meta.env.BASE_URL}solutions/scheduling-flat.svg`, imageAlt: '排程時間軸與時鐘的扁平插畫' },
      { id: 'ems', eyebrow: '03 / EMS', title: '智慧能源', description: '用電監測、需量控制與節能。', visualLabel: 'Smart Energy', imageSrc: `${import.meta.env.BASE_URL}solutions/energy-flat.svg`, imageAlt: '太陽能板與電力的扁平插畫' },
      { id: 'industrial-ai', eyebrow: '04 / INDUSTRIAL AI', title: '工業 AI', description: '預防保養、品質預測與 AI Agent。', visualLabel: 'Industrial AI', imageSrc: `${import.meta.env.BASE_URL}solutions/ai-flat.svg`, imageAlt: 'AI 晶片的扁平插畫' },
      { id: 'digital-integration', eyebrow: '05 / DIGITAL INTEGRATION', title: '數位整合', description: 'OT、IT、雲端與 ERP 串接。', visualLabel: 'Digital Integration', imageSrc: `${import.meta.env.BASE_URL}solutions/integration-flat.svg`, imageAlt: '雲端串接系統節點的扁平插畫' },
    ],
  },
  roadmap: {
    eyebrow: 'ROADMAP',
    title: '四步，從連線到最佳化',
    items: [
      { id: 'connect', eyebrow: '01 / CONNECT', title: '設備連線', description: 'PLC、感測器與電表資料即時擷取。' },
      { id: 'visualize', eyebrow: '02 / VISUALIZE', title: '透明可視', description: 'Web SCADA 與戰情看板，現場一目了然。' },
      { id: 'analyze', eyebrow: '03 / ANALYZE', title: '數據分析', description: '稼動、品質與能耗分析，找出改善點。' },
      { id: 'optimize', eyebrow: '04 / OPTIMIZE', title: '智慧最佳化', description: 'APS 排程與 AI 模型，驅動決策。' },
    ],
  },
  contact: {
    eyebrow: 'CONTACT',
    title: '攜手打造\n您的智慧工廠',
    details: [
      { id: 'email', label: 'Email', value: 'service@cwd-tech.com', href: 'mailto:service@cwd-tech.com' },
      { id: 'phone', label: '電話', value: '0912-331-778', href: 'tel:+886912331778' },
    ],
  },
};
