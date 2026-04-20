export type ServiceType = "design" | "web" | "both";

export interface GraphicDesignAnswers {
  projectType: string;
  projectTypeOther?: string;
  projectStatus: string;
  styleDirection: string;
  timeline: string;
  budget: string;
  notes?: string;
}

export interface WebDevAnswers {
  projectType: string;
  projectTypeOther?: string;
  designStatus: string;
  features: string[];
  timeline: string;
  budget: string;
  notes?: string;
}

export interface QuoteFormState {
  service: ServiceType | null;
  graphicDesign: GraphicDesignAnswers;
  webDev: WebDevAnswers;
}

export type Stage =
  | "landing"
  | "service-select"
  | "design-q1"
  | "design-q2"
  | "design-q3"
  | "design-q4"
  | "design-q5"
  | "design-q6"
  | "web-q1"
  | "web-q2"
  | "web-q3"
  | "web-q4"
  | "web-q5"
  | "web-q6"
  | "summary";

// English labels for design options
export const designLabelsEn = {
  logoBrand: "Logo & Brand Identity",
  socialMedia: "Social Media Content / Templates",
  print: "Print Materials (flyers, posters, brochures, business cards)",
  packaging: "Packaging Design",
  illustration: "Illustration / Custom Artwork",
  other: "Other",
  scratch: "Starting from scratch — no brand yet",
  refresh: "I have a brand but need a refresh",
  deliverables: "My brand is set, just need deliverables",
  unsure: "I'm not sure yet",
  minimal: "Clean & Minimal",
  bold: "Bold & Expressive",
  elegant: "Elegant & Luxury",
  playful: "Playful & Fun",
  corporate: "Corporate & Professional",
  flexible: "I'll leave it to you",
  urgent: "Urgent — within 2 weeks",
  oneMonth: "About 1 month",
  twoThreeMonths: "2–3 months",
  flexibleTimeline: "No rush, I'm flexible",
  under150: "Under 150 RON",
  range150500: "150 – 500 RON",
  range5001500: "500 – 1,500 RON",
  over1500: "1,500+ RON",
  unsureBudget: "Not sure yet, open to suggestions",
};

// Romanian labels for design options
export const designLabelsRo = {
  logoBrand: "Logo și Identitate de Brand",
  socialMedia: "Conținut Social Media / Template-uri",
  print: "Materiale Print (flyere, postere, broșuri, cărți de vizită)",
  packaging: "Design Ambalaje",
  illustration: "Ilustrații / Artwork Personalizat",
  other: "Altceva",
  scratch: "Încep de la zero — încă nu am brand",
  refresh: "Am un brand dar am nevoie de un refresh",
  deliverables: "Brandul meu este setat, doar livrabilele lipsesc",
  unsure: "Nu sunt sigur încă",
  minimal: "Curat și Minimal",
  bold: "Îndrăzneț și Expresiv",
  elegant: "Elegant și de Lux",
  playful: "Jucăuș și Distractiv",
  corporate: "Corporativ și Profesional",
  flexible: "Las la latitudinea ta",
  urgent: "Urgent — în 2 săptămâni",
  oneMonth: "Cam 1 lună",
  twoThreeMonths: "2–3 luni",
  flexibleTimeline: "Nu mă grăbesc, sunt flexibil",
  under150: "Sub 150 RON",
  range150500: "150 – 500 RON",
  range5001500: "500 – 1.500 RON",
  over1500: "1.500+ RON",
  unsureBudget: "Nu sunt sigur încă, deschis la sugestii",
};

// English labels for web dev options
export const webDevLabelsEn = {
  portfolio: "Portfolio / Personal Website",
  business: "Business / Company Website",
  landing: "Landing Page (single page, conversion-focused)",
  ecommerce: "E-commerce Store",
  blog: "Blog or Content Site",
  webapp: "Web Application",
  other: "Other",
  fullPackage: "I need design + development (full package)",
  devOnly: "I have designs/mockups ready — just development",
  guidance: "I have a rough idea — need guidance",
  redesign: "Redesign of an existing website",
  contactForm: "Contact Form",
  cms: "CMS / Ability to edit content myself",
  blogFeature: "Blog / News section",
  payments: "Online Payments / Shop",
  booking: "Booking / Appointment System",
  multilingual: "Multilingual Support",
  seo: "SEO Optimization",
  animations: "Animation / Interactive effects",
  none: "None of these specifically",
  urgent: "Urgent — within 2 weeks",
  oneMonth: "About 1 month",
  twoThreeMonths: "2–3 months",
  flexible: "No rush, I'm flexible",
  under500: "Under 500 RON",
  range5001500: "500 – 1,500 RON",
  range15004000: "1,500 – 4,000 RON",
  over4000: "4,000+ RON",
  unsure: "Not sure yet, open to suggestions",
};

// Romanian labels for web dev options
export const webDevLabelsRo = {
  portfolio: "Portofoliu / Website Personal",
  business: "Website Business / Companie",
  landing: "Landing Page (pagină unică, focusat pe conversie)",
  ecommerce: "Magazin Online",
  blog: "Blog sau Site de Conținut",
  webapp: "Aplicație Web",
  other: "Altceva",
  fullPackage: "Am nevoie de design + development (pachet complet)",
  devOnly: "Am design-uri/mockup-uri gata — doar development",
  guidance: "Am o idee vagă — am nevoie de ghidare",
  redesign: "Redesign al unui website existent",
  contactForm: "Formular de Contact",
  cms: "CMS / Abilitatea de a edita conținutul singur",
  blogFeature: "Secțiune Blog / Știri",
  payments: "Plăți Online / Magazin",
  booking: "Sistem de Rezervări / Programări",
  multilingual: "Suport Multilingv",
  seo: "Optimizare SEO",
  animations: "Animații / Efecte Interactive",
  none: "Nimic specific",
  urgent: "Urgent — în 2 săptămâni",
  oneMonth: "Cam 1 lună",
  twoThreeMonths: "2–3 luni",
  flexible: "Nu mă grăbesc, sunt flexibil",
  under500: "Sub 500 RON",
  range5001500: "500 – 1.500 RON",
  range15004000: "1.500 – 4.000 RON",
  over4000: "4.000+ RON",
  unsure: "Nu sunt sigur încă, deschis la sugestii",
};

// Legacy options (for backwards compatibility)
export const graphicDesignOptions = {
  projectType: [
    { value: "logo-brand", label: designLabelsEn.logoBrand, icon: "🎨" },
    { value: "social-media", label: designLabelsEn.socialMedia, icon: "📱" },
    { value: "print", label: designLabelsEn.print, icon: "🖨️" },
    { value: "packaging", label: designLabelsEn.packaging, icon: "📦" },
    { value: "illustration", label: designLabelsEn.illustration, icon: "✏️" },
    { value: "other", label: designLabelsEn.other, icon: "✨" },
  ],
  projectStatus: [
    { value: "scratch", label: designLabelsEn.scratch, icon: "🆕" },
    { value: "refresh", label: designLabelsEn.refresh, icon: "🔄" },
    { value: "deliverables", label: designLabelsEn.deliverables, icon: "✅" },
    { value: "unsure", label: designLabelsEn.unsure, icon: "🤔" },
  ],
  styleDirection: [
    { value: "minimal", label: designLabelsEn.minimal, icon: "◻️" },
    { value: "bold", label: designLabelsEn.bold, icon: "🔥" },
    { value: "elegant", label: designLabelsEn.elegant, icon: "💎" },
    { value: "playful", label: designLabelsEn.playful, icon: "🎈" },
    { value: "corporate", label: designLabelsEn.corporate, icon: "🏢" },
    { value: "flexible", label: designLabelsEn.flexible, icon: "🎭" },
  ],
  timeline: [
    { value: "urgent", label: designLabelsEn.urgent, icon: "⚡" },
    { value: "1-month", label: designLabelsEn.oneMonth, icon: "📅" },
    { value: "2-3-months", label: designLabelsEn.twoThreeMonths, icon: "📆" },
    { value: "flexible", label: designLabelsEn.flexibleTimeline, icon: "🌿" },
  ],
  budget: [
    { value: "under-150", label: designLabelsEn.under150, icon: "💰" },
    { value: "150-500", label: designLabelsEn.range150500, icon: "💰💰" },
    { value: "500-1500", label: designLabelsEn.range5001500, icon: "💰💰💰" },
    { value: "1500+", label: designLabelsEn.over1500, icon: "💎" },
    { value: "unsure", label: designLabelsEn.unsureBudget, icon: "🤷" },
  ],
};

export const webDevOptions = {
  projectType: [
    { value: "portfolio", label: webDevLabelsEn.portfolio, icon: "👤" },
    { value: "business", label: webDevLabelsEn.business, icon: "🏢" },
    { value: "landing", label: webDevLabelsEn.landing, icon: "🎯" },
    { value: "ecommerce", label: webDevLabelsEn.ecommerce, icon: "🛒" },
    { value: "blog", label: webDevLabelsEn.blog, icon: "📝" },
    { value: "webapp", label: webDevLabelsEn.webapp, icon: "⚙️" },
    { value: "other", label: webDevLabelsEn.other, icon: "✨" },
  ],
  designStatus: [
    { value: "full-package", label: webDevLabelsEn.fullPackage, icon: "🎨" },
    { value: "dev-only", label: webDevLabelsEn.devOnly, icon: "📐" },
    { value: "guidance", label: webDevLabelsEn.guidance, icon: "💡" },
    { value: "redesign", label: webDevLabelsEn.redesign, icon: "🔄" },
  ],
  features: [
    { value: "contact-form", label: webDevLabelsEn.contactForm, icon: "📧" },
    { value: "cms", label: webDevLabelsEn.cms, icon: "📝" },
    { value: "blog-section", label: webDevLabelsEn.blogFeature, icon: "📰" },
    { value: "payments", label: webDevLabelsEn.payments, icon: "💳" },
    { value: "booking", label: webDevLabelsEn.booking, icon: "📅" },
    { value: "multilingual", label: webDevLabelsEn.multilingual, icon: "🌍" },
    { value: "seo", label: webDevLabelsEn.seo, icon: "🔍" },
    { value: "animations", label: webDevLabelsEn.animations, icon: "✨" },
    { value: "none", label: webDevLabelsEn.none, icon: "❌" },
  ],
  timeline: [
    { value: "urgent", label: webDevLabelsEn.urgent, icon: "⚡" },
    { value: "1-month", label: webDevLabelsEn.oneMonth, icon: "📅" },
    { value: "2-3-months", label: webDevLabelsEn.twoThreeMonths, icon: "📆" },
    { value: "flexible", label: webDevLabelsEn.flexible, icon: "🌿" },
  ],
  budget: [
    { value: "under-500", label: webDevLabelsEn.under500, icon: "💰" },
    { value: "500-1500", label: webDevLabelsEn.range5001500, icon: "💰💰" },
    { value: "1500-4000", label: webDevLabelsEn.range15004000, icon: "💰💰💰" },
    { value: "4000+", label: webDevLabelsEn.over4000, icon: "💎" },
    { value: "unsure", label: webDevLabelsEn.unsure, icon: "🤷" },
  ],
};

export const serviceOptions = [
  { value: "design", label: "Graphic Design", icon: "🎨" },
  { value: "web", label: "Web Development", icon: "💻" },
  { value: "both", label: "Both", icon: "✨" },
];

export const getStageProgress = (stage: Stage): number => {
  const stageMap: Record<Stage, number> = {
    landing: 0,
    "service-select": 10,
    "design-q1": 20,
    "design-q2": 30,
    "design-q3": 40,
    "design-q4": 50,
    "design-q5": 60,
    "design-q6": 70,
    "web-q1": 20,
    "web-q2": 30,
    "web-q3": 40,
    "web-q4": 50,
    "web-q5": 60,
    "web-q6": 70,
    summary: 100,
  };
  return stageMap[stage] || 0;
};

export const getStageNumber = (
  stage: Stage
): { current: number; total: number } => {
  if (stage === "landing") return { current: 0, total: 0 };
  if (stage === "service-select") return { current: 1, total: 1 };
  if (stage === "summary") return { current: 0, total: 0 };
  if (stage.startsWith("design-")) {
    const qNum = parseInt(stage.split("-q")[1]);
    return { current: qNum, total: 6 };
  }
  if (stage.startsWith("web-")) {
    const qNum = parseInt(stage.split("-q")[1]);
    return { current: qNum, total: 6 };
  }
  return { current: 0, total: 0 };
};
