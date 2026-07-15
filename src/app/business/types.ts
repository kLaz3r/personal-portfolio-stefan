export type ServiceType = "design" | "web" | "photography" | "video";

export const SERVICE_TO_PREFIX: Record<ServiceType, string> = {
  design: "design",
  web: "web",
  photography: "photo",
  video: "video",
};

export const PREFIX_TO_SERVICE: Record<string, ServiceType> = {
  design: "design",
  web: "web",
  photo: "photography",
  video: "video",
};

export function getStagePrefix(service: ServiceType): string {
  return SERVICE_TO_PREFIX[service];
}

export function getServiceFromStage(stage: Stage): ServiceType | null {
  const match = stage.match(/^(.+)-q\d+$/);
  if (!match) return null;
  return PREFIX_TO_SERVICE[match[1]] || null;
}

export function getQuestionNumber(stage: Stage): number {
  const match = stage.match(/-q(\d+)$/);
  if (!match) return 0;
  return parseInt(match[1]);
}

export function getNextStage(
  selectedServices: ServiceType[],
  currentStage: Stage,
): Stage {
  if (currentStage === "service-select") {
    if (selectedServices.length > 0) {
      return `${SERVICE_TO_PREFIX[selectedServices[0]]}-q1` as Stage;
    }
    return "summary";
  }
  const service = getServiceFromStage(currentStage);
  if (!service) return "summary";
  const qNum = getQuestionNumber(currentStage);
  if (qNum < 6) {
    return `${SERVICE_TO_PREFIX[service]}-q${qNum + 1}` as Stage;
  }
  const currentIdx = selectedServices.indexOf(service);
  if (currentIdx >= 0 && currentIdx < selectedServices.length - 1) {
    const nextService = selectedServices[currentIdx + 1];
    return `${SERVICE_TO_PREFIX[nextService]}-q1` as Stage;
  }
  return "summary";
}

export function getPrevStage(
  selectedServices: ServiceType[],
  currentStage: Stage,
): Stage {
  const service = getServiceFromStage(currentStage);
  if (!service) return "service-select";
  const qNum = getQuestionNumber(currentStage);
  if (qNum > 1) {
    return `${SERVICE_TO_PREFIX[service]}-q${qNum - 1}` as Stage;
  }
  const currentIdx = selectedServices.indexOf(service);
  if (currentIdx > 0) {
    const prevService = selectedServices[currentIdx - 1];
    return `${SERVICE_TO_PREFIX[prevService]}-q6` as Stage;
  }
  return "service-select";
}

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

export interface PhotographyAnswers {
  projectType: string;
  projectTypeOther?: string;
  location: string;
  locationOther?: string;
  purpose: string;
  purposeOther?: string;
  timeline: string;
  budget: string;
  notes?: string;
}

export interface VideoEditingAnswers {
  projectType: string;
  projectTypeOther?: string;
  footageStatus: string;
  editingStyle: string;
  timeline: string;
  budget: string;
  notes?: string;
}

export interface QuoteFormState {
  selectedServices: ServiceType[];
  graphicDesign: GraphicDesignAnswers;
  webDev: WebDevAnswers;
  photography: PhotographyAnswers;
  videoEditing: VideoEditingAnswers;
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
  | "photo-q1"
  | "photo-q2"
  | "photo-q3"
  | "photo-q4"
  | "photo-q5"
  | "photo-q6"
  | "video-q1"
  | "video-q2"
  | "video-q3"
  | "video-q4"
  | "video-q5"
  | "video-q6"
  | "summary";

// ── Design labels ──

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

// ── Web dev labels ──

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

// ── Photography labels ──

export const photographyLabelsEn = {
  businessCorporate: "Business / Corporate",
  productPhotography: "Product Photography",
  eventPhotography: "Event Photography",
  portraitSession: "Portrait Session",
  realEstate: "Real Estate",
  foodPhotography: "Food Photography",
  other: "Other",
  yourLocation: "At your location",
  outdoor: "Outdoor",
  studio: "Studio",
  needRecommendations: "Need recommendations",
  otherLocation: "Other",
  website: "Website",
  socialMedia: "Social Media",
  marketingCampaign: "Marketing Campaign",
  printMaterials: "Print Materials",
  personalUse: "Personal Use",
  otherPurpose: "Other",
  urgent: "Urgent — within 2 weeks",
  oneMonth: "About 1 month",
  twoThreeMonths: "2–3 months",
  flexible: "No rush, I'm flexible",
  under300: "Under 300 RON",
  range300800: "300 – 800 RON",
  range8002000: "800 – 2,000 RON",
  over2000: "2,000+ RON",
  unsure: "Not sure yet, open to suggestions",
};

export const photographyLabelsRo = {
  businessCorporate: "Business / Corporate",
  productPhotography: "Fotografie de Produs",
  eventPhotography: "Fotografie de Eveniment",
  portraitSession: "Ședință Foto Portret",
  realEstate: "Imobiliare",
  foodPhotography: "Fotografie Culinară",
  other: "Altceva",
  yourLocation: "La locația ta",
  outdoor: "În aer liber",
  studio: "Studio",
  needRecommendations: "Am nevoie de recomandări",
  otherLocation: "Altceva",
  website: "Website",
  socialMedia: "Social Media",
  marketingCampaign: "Campanie de Marketing",
  printMaterials: "Materiale Tipărite",
  personalUse: "Uz Personal",
  otherPurpose: "Altceva",
  urgent: "Urgent — în 2 săptămâni",
  oneMonth: "Cam 1 lună",
  twoThreeMonths: "2–3 luni",
  flexible: "Nu mă grăbesc, sunt flexibil",
  under300: "Sub 300 RON",
  range300800: "300 – 800 RON",
  range8002000: "800 – 2.000 RON",
  over2000: "2.000+ RON",
  unsure: "Nu sunt sigur încă, deschis la sugestii",
};

// ── Video editing labels ──

export const videoEditingLabelsEn = {
  socialReels: "Social Media Reels",
  youtubeVideo: "YouTube Video",
  promoVideo: "Promotional Video",
  eventHighlights: "Event Highlights",
  podcast: "Podcast",
  shortFilm: "Short Film",
  other: "Other",
  haveAll: "I already have all footage",
  haveSome: "I have some footage",
  needFilming: "I need filming too",
  notSure: "Not sure",
  cleanProfessional: "Clean & Professional",
  cinematic: "Cinematic",
  fastPacedSocial: "Fast-paced Social Media",
  minimal: "Minimal",
  flexible: "I'll leave it to you",
  urgent: "Urgent — within 2 weeks",
  oneMonth: "About 1 month",
  twoThreeMonths: "2–3 months",
  flexibleTimeline: "No rush, I'm flexible",
  under300: "Under 300 RON",
  range300800: "300 – 800 RON",
  range8002000: "800 – 2,000 RON",
  over2000: "2,000+ RON",
  unsure: "Not sure yet, open to suggestions",
};

export const videoEditingLabelsRo = {
  socialReels: "Reel-uri Social Media",
  youtubeVideo: "Video YouTube",
  promoVideo: "Video Promoțional",
  eventHighlights: "Rezumat Eveniment",
  podcast: "Podcast",
  shortFilm: "Scurtmetraj",
  other: "Altceva",
  haveAll: "Am deja toate materialele",
  haveSome: "Am câteva materiale",
  needFilming: "Am nevoie și de filmare",
  notSure: "Nu sunt sigur",
  cleanProfessional: "Curat și Profesional",
  cinematic: "Cinematic",
  fastPacedSocial: "Rapid — Social Media",
  minimal: "Minimal",
  flexible: "Las la latitudinea ta",
  urgent: "Urgent — în 2 săptămâni",
  oneMonth: "Cam 1 lună",
  twoThreeMonths: "2–3 luni",
  flexibleTimeline: "Nu mă grăbesc, sunt flexibil",
  under300: "Sub 300 RON",
  range300800: "300 – 800 RON",
  range8002000: "800 – 2.000 RON",
  over2000: "2.000+ RON",
  unsure: "Nu sunt sigur încă, deschis la sugestii",
};

// ── Shared timeline labels (used by all services) ──

export const timelineLabelsEn = {
  urgent: "Urgent — within 2 weeks",
  oneMonth: "About 1 month",
  twoThreeMonths: "2–3 months",
  flexible: "No rush, I'm flexible",
};

export const timelineLabelsRo = {
  urgent: "Urgent — în 2 săptămâni",
  oneMonth: "Cam 1 lună",
  twoThreeMonths: "2–3 luni",
  flexible: "Nu mă grăbesc, sunt flexibil",
};

// ── Option definitions ──

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
    { value: "urgent", label: timelineLabelsEn.urgent, icon: "⚡" },
    { value: "1-month", label: timelineLabelsEn.oneMonth, icon: "📅" },
    { value: "2-3-months", label: timelineLabelsEn.twoThreeMonths, icon: "📆" },
    { value: "flexible", label: timelineLabelsEn.flexible, icon: "🌿" },
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
    { value: "urgent", label: timelineLabelsEn.urgent, icon: "⚡" },
    { value: "1-month", label: timelineLabelsEn.oneMonth, icon: "📅" },
    { value: "2-3-months", label: timelineLabelsEn.twoThreeMonths, icon: "📆" },
    { value: "flexible", label: timelineLabelsEn.flexible, icon: "🌿" },
  ],
  budget: [
    { value: "under-500", label: webDevLabelsEn.under500, icon: "💰" },
    { value: "500-1500", label: webDevLabelsEn.range5001500, icon: "💰💰" },
    { value: "1500-4000", label: webDevLabelsEn.range15004000, icon: "💰💰💰" },
    { value: "4000+", label: webDevLabelsEn.over4000, icon: "💎" },
    { value: "unsure", label: webDevLabelsEn.unsure, icon: "🤷" },
  ],
};

export const photographyOptions = {
  projectType: [
    { value: "business-corporate", label: photographyLabelsEn.businessCorporate, icon: "🏢" },
    { value: "product", label: photographyLabelsEn.productPhotography, icon: "📦" },
    { value: "event", label: photographyLabelsEn.eventPhotography, icon: "🎉" },
    { value: "portrait", label: photographyLabelsEn.portraitSession, icon: "📸" },
    { value: "real-estate", label: photographyLabelsEn.realEstate, icon: "🏠" },
    { value: "food", label: photographyLabelsEn.foodPhotography, icon: "🍽️" },
    { value: "other", label: photographyLabelsEn.other, icon: "✨" },
  ],
  location: [
    { value: "your-location", label: photographyLabelsEn.yourLocation, icon: "📍" },
    { value: "outdoor", label: photographyLabelsEn.outdoor, icon: "🌳" },
    { value: "studio", label: photographyLabelsEn.studio, icon: "🏬" },
    { value: "recommendations", label: photographyLabelsEn.needRecommendations, icon: "💡" },
    { value: "other", label: photographyLabelsEn.otherLocation, icon: "✨" },
  ],
  purpose: [
    { value: "website", label: photographyLabelsEn.website, icon: "🌐" },
    { value: "social-media", label: photographyLabelsEn.socialMedia, icon: "📱" },
    { value: "marketing", label: photographyLabelsEn.marketingCampaign, icon: "📢" },
    { value: "print", label: photographyLabelsEn.printMaterials, icon: "🖨️" },
    { value: "personal", label: photographyLabelsEn.personalUse, icon: "👤" },
    { value: "other", label: photographyLabelsEn.otherPurpose, icon: "✨" },
  ],
  timeline: [
    { value: "urgent", label: timelineLabelsEn.urgent, icon: "⚡" },
    { value: "1-month", label: timelineLabelsEn.oneMonth, icon: "📅" },
    { value: "2-3-months", label: timelineLabelsEn.twoThreeMonths, icon: "📆" },
    { value: "flexible", label: timelineLabelsEn.flexible, icon: "🌿" },
  ],
  budget: [
    { value: "under-300", label: photographyLabelsEn.under300, icon: "💰" },
    { value: "300-800", label: photographyLabelsEn.range300800, icon: "💰💰" },
    { value: "800-2000", label: photographyLabelsEn.range8002000, icon: "💰💰💰" },
    { value: "2000+", label: photographyLabelsEn.over2000, icon: "💎" },
    { value: "unsure", label: photographyLabelsEn.unsure, icon: "🤷" },
  ],
};

export const videoEditingOptions = {
  projectType: [
    { value: "social-reels", label: videoEditingLabelsEn.socialReels, icon: "📱" },
    { value: "youtube", label: videoEditingLabelsEn.youtubeVideo, icon: "▶️" },
    { value: "promo", label: videoEditingLabelsEn.promoVideo, icon: "🎬" },
    { value: "event", label: videoEditingLabelsEn.eventHighlights, icon: "🎉" },
    { value: "podcast", label: videoEditingLabelsEn.podcast, icon: "🎙️" },
    { value: "short-film", label: videoEditingLabelsEn.shortFilm, icon: "🎥" },
    { value: "other", label: videoEditingLabelsEn.other, icon: "✨" },
  ],
  footageStatus: [
    { value: "have-all", label: videoEditingLabelsEn.haveAll, icon: "✅" },
    { value: "have-some", label: videoEditingLabelsEn.haveSome, icon: "📁" },
    { value: "need-filming", label: videoEditingLabelsEn.needFilming, icon: "🎥" },
    { value: "not-sure", label: videoEditingLabelsEn.notSure, icon: "🤔" },
  ],
  editingStyle: [
    { value: "clean", label: videoEditingLabelsEn.cleanProfessional, icon: "✨" },
    { value: "cinematic", label: videoEditingLabelsEn.cinematic, icon: "🎬" },
    { value: "fast-paced", label: videoEditingLabelsEn.fastPacedSocial, icon: "⚡" },
    { value: "minimal", label: videoEditingLabelsEn.minimal, icon: "◻️" },
    { value: "flexible", label: videoEditingLabelsEn.flexible, icon: "🎭" },
  ],
  timeline: [
    { value: "urgent", label: timelineLabelsEn.urgent, icon: "⚡" },
    { value: "1-month", label: timelineLabelsEn.oneMonth, icon: "📅" },
    { value: "2-3-months", label: timelineLabelsEn.twoThreeMonths, icon: "📆" },
    { value: "flexible", label: timelineLabelsEn.flexible, icon: "🌿" },
  ],
  budget: [
    { value: "under-300", label: videoEditingLabelsEn.under300, icon: "💰" },
    { value: "300-800", label: videoEditingLabelsEn.range300800, icon: "💰💰" },
    { value: "800-2000", label: videoEditingLabelsEn.range8002000, icon: "💰💰💰" },
    { value: "2000+", label: videoEditingLabelsEn.over2000, icon: "💎" },
    { value: "unsure", label: videoEditingLabelsEn.unsure, icon: "🤷" },
  ],
};

// ── Service selection options ──

export const serviceOptions: { value: ServiceType | "multiple"; label: string; icon: string }[] = [
  { value: "design", label: "Graphic Design", icon: "🎨" },
  { value: "web", label: "Web Development", icon: "💻" },
  { value: "photography", label: "Photography Services", icon: "📸" },
  { value: "video", label: "Video Editing & Montage", icon: "🎬" },
  { value: "multiple", label: "Multiple Services", icon: "✨" },
];

export const allSingleServices: ServiceType[] = ["design", "web", "photography", "video"];

export function getStageProgress(stage: Stage): number {
  if (stage === "landing") return 0;
  if (stage === "service-select") return 5;
  if (stage === "summary") return 100;
  const match = stage.match(/^.+-q(\d+)$/);
  if (match) {
    const qNum = parseInt(match[1]);
    return 10 + qNum * 13;
  }
  return 0;
}

export function getStageNumber(stage: Stage): { current: number; total: number } {
  if (stage === "landing") return { current: 0, total: 0 };
  if (stage === "service-select") return { current: 1, total: 1 };
  if (stage === "summary") return { current: 0, total: 0 };
  const match = stage.match(/^.+-q(\d+)$/);
  if (match) {
    return { current: parseInt(match[1]), total: 6 };
  }
  return { current: 0, total: 0 };
}
