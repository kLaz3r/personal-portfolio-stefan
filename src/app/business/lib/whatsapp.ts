import {
  QuoteFormState,
  GraphicDesignAnswers,
  WebDevAnswers,
} from "../types";

const WHATSAPP_NUMBER = "40744305417";

interface WhatsAppLabels {
  service: string;
  projectType: string;
  status: string;
  style: string;
  timeline: string;
  budget: string;
  design: string;
  features: string;
  notes: string;
  greeting: string;
  partIndicator: string;
  serviceDesign: string;
  serviceWeb: string;
}

function getLabels(language: string): WhatsAppLabels {
  if (language === "ro") {
    return {
      service: "🛠 Serviciu:",
      projectType: "📌 Tip Proiect:",
      status: "📊 Status:",
      style: "✏️ Stil:",
      timeline: "📅 Termen:",
      budget: "💰 Buget:",
      design: "🎨 Design:",
      features: "⚙️ Funcționalități:",
      notes: "📝 Note:",
      greeting: "Salut Stefan! Am primit cardul tău de vizită și sunt interesat să colaborăm.",
      partIndicator: "Partea {part} din {total}",
      serviceDesign: "🎨 Graphic Design",
      serviceWeb: "💻 Web Development",
    };
  }
  return {
    service: "🛠 Service:",
    projectType: "📌 Project Type:",
    status: "📊 Status:",
    style: "✏️ Style:",
    timeline: "📅 Timeline:",
    budget: "💰 Budget:",
    design: "🎨 Design:",
    features: "⚙️ Features:",
    notes: "📝 Notes:",
    greeting: "👋 Hi Stefan! I got your business card and I'm interested in working together.",
    partIndicator: "Part {part} of {total}",
    serviceDesign: "🎨 Graphic Design",
    serviceWeb: "💻 Web Development",
  };
}

function getDesignLabel(value: string, otherText: string | undefined, language: string): string {
  if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
  if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");

  const labelsRo: Record<string, string> = {
    "logo-brand": "Logo și Identitate de Brand",
    "social-media": "Conținut Social Media / Template-uri",
    "print": "Materiale Print",
    "packaging": "Design Ambalaje",
    "illustration": "Ilustrații / Artwork Personalizat",
    "scratch": "Încep de la zero",
    "refresh": "Am un brand dar am nevoie de un refresh",
    "deliverables": "Brandul meu este setat, doar livrabilele lipsesc",
    "unsure": "Nu sunt sigur încă",
    "minimal": "Curat și Minimal",
    "bold": "Îndrăzneț și Expresiv",
    "elegant": "Elegant și de Lux",
    "playful": "Jucăuș și Distractiv",
    "corporate": "Corporativ și Profesional",
    "flexible": "Las la latitudinea ta",
    "urgent": "Urgent — în 2 săptămâni",
    "1-month": "Cam 1 lună",
    "2-3-months": "2–3 luni",
    "under-150": "Sub 150 RON",
    "150-500": "150 – 500 RON",
    "500-1500": "500 – 1.500 RON",
    "1500+": "1.500+ RON",
  };

  const labelsEn: Record<string, string> = {
    "logo-brand": "Logo & Brand Identity",
    "social-media": "Social Media Content / Templates",
    "print": "Print Materials",
    "packaging": "Packaging Design",
    "illustration": "Illustration / Custom Artwork",
    "scratch": "Starting from scratch",
    "refresh": "I have a brand but need a refresh",
    "deliverables": "My brand is set, just need deliverables",
    "unsure": "I'm not sure yet",
    "minimal": "Clean & Minimal",
    "bold": "Bold & Expressive",
    "elegant": "Elegant & Luxury",
    "playful": "Playful & Fun",
    "corporate": "Corporate & Professional",
    "flexible": "I'll leave it to you",
    "urgent": "Urgent — within 2 weeks",
    "1-month": "About 1 month",
    "2-3-months": "2–3 months",
    "under-150": "Under 150 RON",
    "150-500": "150 – 500 RON",
    "500-1500": "500 – 1,500 RON",
    "1500+": "1,500+ RON",
  };

  const labels = language === "ro" ? labelsRo : labelsEn;
  return labels[value] || value;
}

function getWebDevLabel(value: string, otherText: string | undefined, language: string): string {
  if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
  if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");
  if (value === "none") return language === "ro" ? "Nimic specific" : "None specifically";

  const labelsRo: Record<string, string> = {
    "portfolio": "Portofoliu / Website Personal",
    "business": "Website Business / Companie",
    "landing": "Landing Page",
    "ecommerce": "Magazin Online",
    "blog": "Blog sau Site de Conținut",
    "webapp": "Aplicație Web",
    "full-package": "Pachet complet (design + development)",
    "dev-only": "Doar development",
    "guidance": "Am nevoie de ghidare",
    "redesign": "Redesign website existent",
    "contact-form": "Formular de Contact",
    "cms": "CMS",
    "blog-section": "Secțiune Blog / Știri",
    "payments": "Plăți Online / Magazin",
    "booking": "Sistem de Rezervări",
    "multilingual": "Suport Multilingv",
    "seo": "Optimizare SEO",
    "animations": "Animații / Efecte Interactive",
    "urgent": "Urgent — în 2 săptămâni",
    "1-month": "Cam 1 lună",
    "2-3-months": "2–3 luni",
    "flexible": "Nu mă grăbesc, sunt flexibil",
    "under-500": "Sub 500 RON",
    "500-1500": "500 – 1.500 RON",
    "1500-4000": "1.500 – 4.000 RON",
    "4000+": "4.000+ RON",
    "unsure": "Nu sunt sigur încă",
  };

  const labelsEn: Record<string, string> = {
    "portfolio": "Portfolio / Personal Website",
    "business": "Business / Company Website",
    "landing": "Landing Page",
    "ecommerce": "E-commerce Store",
    "blog": "Blog or Content Site",
    "webapp": "Web Application",
    "full-package": "Full package (design + development)",
    "dev-only": "Development only",
    "guidance": "Need guidance",
    "redesign": "Redesign existing website",
    "contact-form": "Contact Form",
    "cms": "CMS",
    "blog-section": "Blog / News section",
    "payments": "Online Payments / Shop",
    "booking": "Booking System",
    "multilingual": "Multilingual Support",
    "seo": "SEO Optimization",
    "animations": "Animation / Interactive effects",
    "urgent": "Urgent — within 2 weeks",
    "1-month": "About 1 month",
    "2-3-months": "2–3 months",
    "flexible": "No rush, I'm flexible",
    "under-500": "Under 500 RON",
    "500-1500": "500 – 1,500 RON",
    "1500-4000": "1,500 – 4,000 RON",
    "4000+": "4,000+ RON",
    "unsure": "Not sure yet",
  };

  const labels = language === "ro" ? labelsRo : labelsEn;
  return labels[value] || value;
}

function formatGraphicDesignMessage(
  answers: GraphicDesignAnswers,
  labels: WhatsAppLabels,
  lang: string
): string {
  const projectTypeValue = answers.projectType === "other" && answers.projectTypeOther
    ? answers.projectTypeOther
    : getDesignLabel(answers.projectType, answers.projectTypeOther, lang);

  const lines = [
    labels.serviceDesign,
    `${labels.projectType} ${projectTypeValue}`,
    `${labels.status} ${getDesignLabel(answers.projectStatus, undefined, lang)}`,
    `${labels.style} ${getDesignLabel(answers.styleDirection, undefined, lang)}`,
    `${labels.timeline} ${getDesignLabel(answers.timeline, undefined, lang)}`,
    `${labels.budget} ${getDesignLabel(answers.budget, undefined, lang)}`,
  ];

  if (answers.notes) {
    lines.push(`\n${labels.notes} ${answers.notes}`);
  }

  return lines.join("\n");
}

function formatWebDevMessage(
  answers: WebDevAnswers,
  labels: WhatsAppLabels,
  lang: string
): string {
  const projectTypeValue = answers.projectType === "other" && answers.projectTypeOther
    ? answers.projectTypeOther
    : getWebDevLabel(answers.projectType, answers.projectTypeOther, lang);

  const featuresLabels = answers.features
    ?.map((f) => getWebDevLabel(f, undefined, lang))
    .filter((f) => f !== "Not selected")
    .join(", ") || (lang === "ro" ? "Nimic specific" : "None specifically");

  const lines = [
    labels.serviceWeb,
    `${labels.projectType} ${projectTypeValue}`,
    `${labels.design} ${getWebDevLabel(answers.designStatus, undefined, lang)}`,
    `${labels.features} ${featuresLabels}`,
    `${labels.timeline} ${getWebDevLabel(answers.timeline, undefined, lang)}`,
    `${labels.budget} ${getWebDevLabel(answers.budget, undefined, lang)}`,
  ];

  if (answers.notes) {
    lines.push(`\n${labels.notes} ${answers.notes}`);
  }

  return lines.join("\n");
}

export function generateWhatsAppMessage(
  formState: QuoteFormState,
  language: string = "en"
): string {
  const labels = getLabels(language);
  const sections: string[] = [];

  if (formState.service === "design" || formState.service === "both") {
    sections.push(formatGraphicDesignMessage(formState.graphicDesign, labels, language));
  }

  if (formState.service === "web" || formState.service === "both") {
    sections.push(formatWebDevMessage(formState.webDev, labels, language));
  }

  const message = [labels.greeting, ""];

  // Add spacing between sections if both services
  if (formState.service === "both") {
    sections.forEach((section, index) => {
      if (index > 0) {
        message.push("---");
      }
      message.push(section);
    });
  } else {
    message.push(sections[0]);
  }

  return message.join("\n");
}

export function generateWhatsAppLink(
  formState: QuoteFormState,
  language: string = "en"
): string {
  const message = generateWhatsAppMessage(formState, language);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(
  formState: QuoteFormState,
  language: string = "en"
): void {
  // Try to get language from localStorage or use default
  let lang = language;
  if (typeof window !== "undefined") {
    const storedLang = window.localStorage.getItem("language");
    if (storedLang === "ro" || storedLang === "en") {
      lang = storedLang;
    }
  }
  const link = generateWhatsAppLink(formState, lang);
  window.open(link, "_blank");
}
