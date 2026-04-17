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

export const graphicDesignOptions = {
  projectType: [
    { value: "logo-brand", label: "Logo & Brand Identity", icon: "🎨" },
    { value: "social-media", label: "Social Media Content / Templates", icon: "📱" },
    { value: "print", label: "Print Materials (flyers, posters, brochures, business cards)", icon: "🖨️" },
    { value: "packaging", label: "Packaging Design", icon: "📦" },
    { value: "illustration", label: "Illustration / Custom Artwork", icon: "✏️" },
    { value: "other", label: "Other", icon: "✨" },
  ],
  projectStatus: [
    { value: "scratch", label: "Starting from scratch — no brand yet", icon: "🆕" },
    { value: "refresh", label: "I have a brand but need a refresh", icon: "🔄" },
    { value: "deliverables", label: "My brand is set, just need deliverables", icon: "✅" },
    { value: "unsure", label: "I'm not sure yet", icon: "🤔" },
  ],
  styleDirection: [
    { value: "minimal", label: "Clean & Minimal", icon: "◻️" },
    { value: "bold", label: "Bold & Expressive", icon: "🔥" },
    { value: "elegant", label: "Elegant & Luxury", icon: "💎" },
    { value: "playful", label: "Playful & Fun", icon: "🎈" },
    { value: "corporate", label: "Corporate & Professional", icon: "🏢" },
    { value: "flexible", label: "I'll leave it to you", icon: "🎭" },
  ],
  timeline: [
    { value: "urgent", label: "Urgent — within 2 weeks", icon: "⚡" },
    { value: "1-month", label: "About 1 month", icon: "📅" },
    { value: "2-3-months", label: "2–3 months", icon: "📆" },
    { value: "flexible", label: "No rush, I'm flexible", icon: "🌿" },
  ],
  budget: [
    { value: "under-150", label: "Under 150 RON", icon: "💰" },
    { value: "150-500", label: "150 – 500 RON", icon: "💰💰" },
    { value: "500-1500", label: "500 – 1,500 RON", icon: "💰💰💰" },
    { value: "1500+", label: "1,500+ RON", icon: "💎" },
    { value: "unsure", label: "Not sure yet, open to suggestions", icon: "🤷" },
  ],
};

export const webDevOptions = {
  projectType: [
    { value: "portfolio", label: "Portfolio / Personal Website", icon: "👤" },
    { value: "business", label: "Business / Company Website", icon: "🏢" },
    { value: "landing", label: "Landing Page (single page, conversion-focused)", icon: "🎯" },
    { value: "ecommerce", label: "E-commerce Store", icon: "🛒" },
    { value: "blog", label: "Blog or Content Site", icon: "📝" },
    { value: "webapp", label: "Web Application", icon: "⚙️" },
    { value: "other", label: "Other", icon: "✨" },
  ],
  designStatus: [
    { value: "full-package", label: "I need design + development (full package)", icon: "🎨" },
    { value: "dev-only", label: "I have designs/mockups ready — just development", icon: "📐" },
    { value: "guidance", label: "I have a rough idea — need guidance", icon: "💡" },
    { value: "redesign", label: "Redesign of an existing website", icon: "🔄" },
  ],
  features: [
    { value: "contact-form", label: "Contact Form", icon: "📧" },
    { value: "cms", label: "CMS / Ability to edit content myself", icon: "📝" },
    { value: "blog", label: "Blog / News section", icon: "📰" },
    { value: "payments", label: "Online Payments / Shop", icon: "💳" },
    { value: "booking", label: "Booking / Appointment System", icon: "📅" },
    { value: "multilingual", label: "Multilingual Support", icon: "🌍" },
    { value: "seo", label: "SEO Optimization", icon: "🔍" },
    { value: "animations", label: "Animation / Interactive effects", icon: "✨" },
    { value: "none", label: "None of these specifically", icon: "❌" },
  ],
  timeline: [
    { value: "urgent", label: "Urgent — within 2 weeks", icon: "⚡" },
    { value: "1-month", label: "About 1 month", icon: "📅" },
    { value: "2-3-months", label: "2–3 months", icon: "📆" },
    { value: "flexible", label: "No rush, I'm flexible", icon: "🌿" },
  ],
  budget: [
    { value: "under-500", label: "Under 500 RON", icon: "💰" },
    { value: "500-1500", label: "500 – 1,500 RON", icon: "💰💰" },
    { value: "1500-4000", label: "1,500 – 4,000 RON", icon: "💰💰💰" },
    { value: "4000+", label: "4,000+ RON", icon: "💎" },
    { value: "unsure", label: "Not sure yet, open to suggestions", icon: "🤷" },
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

export const getStageNumber = (stage: Stage): { current: number; total: number } => {
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
