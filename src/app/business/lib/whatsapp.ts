import {
  QuoteFormState,
  GraphicDesignAnswers,
  WebDevAnswers,
  PhotographyAnswers,
  VideoEditingAnswers,
  ServiceType,
} from "../types";

const WHATSAPP_NUMBER = "40770892084";

interface WhatsAppLabels {
  serviceDesign: string;
  serviceWeb: string;
  servicePhotography: string;
  serviceVideo: string;
  projectType: string;
  status: string;
  style: string;
  timeline: string;
  budget: string;
  design: string;
  features: string;
  location: string;
  purpose: string;
  footage: string;
  notes: string;
  greeting: string;
}

function getLabels(language: string): WhatsAppLabels {
  if (language === "ro") {
    return {
      serviceDesign: "🎨 Grafică",
      serviceWeb: "💻 Web Development",
      servicePhotography: "📸 Fotografie",
      serviceVideo: "🎬 Video Editing & Montaj",
      projectType: "📌 Tip Proiect:",
      status: "📊 Status:",
      style: "✏️ Stil:",
      timeline: "📅 Termen:",
      budget: "💰 Buget:",
      design: "🎨 Design:",
      features: "⚙️ Funcționalități:",
      location: "📍 Locație:",
      purpose: "🎯 Scop:",
      footage: "🎥 Materiale:",
      notes: "📝 Note:",
      greeting: "Salut Stefan! Am primit cartea ta de vizită și sunt interesat să colaborăm.",
    };
  }
  return {
    serviceDesign: "🎨 Graphic Design",
    serviceWeb: "💻 Web Development",
    servicePhotography: "📸 Photography",
    serviceVideo: "🎬 Video Editing & Montage",
    projectType: "📌 Project Type:",
    status: "📊 Status:",
    style: "✏️ Style:",
    timeline: "📅 Timeline:",
    budget: "💰 Budget:",
    design: "🎨 Design:",
    features: "⚙️ Features:",
    location: "📍 Location:",
    purpose: "🎯 Purpose:",
    footage: "🎥 Footage:",
    notes: "📝 Notes:",
    greeting: "👋 Hi Stefan! I got your business card and I'm interested in working together.",
  };
}

function getDesignWALabel(value: string, otherText: string | undefined, language: string): string {
  if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
  if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");

  const labelsRo: Record<string, string> = {
    "logo-brand": "Logo și Identitate de Brand",
    "social-media": "Conținut Social Media / Template-uri",
    print: "Materiale Print",
    packaging: "Design Ambalaje",
    illustration: "Ilustrații / Artwork Personalizat",
    scratch: "Încep de la zero",
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
    print: "Print Materials",
    packaging: "Packaging Design",
    illustration: "Illustration / Custom Artwork",
    scratch: "Starting from scratch",
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

function getWebDevWALabel(value: string, otherText: string | undefined, language: string): string {
  if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
  if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");
  if (value === "none") return language === "ro" ? "Nimic specific" : "None specifically";

  const labelsRo: Record<string, string> = {
    portfolio: "Portofoliu / Website Personal",
    business: "Website Business / Companie",
    landing: "Landing Page",
    ecommerce: "Magazin Online",
    blog: "Blog sau Site de Conținut",
    webapp: "Aplicație Web",
    "full-package": "Pachet complet (design + development)",
    "dev-only": "Doar development",
    guidance: "Am nevoie de ghidare",
    redesign: "Redesign website existent",
    "contact-form": "Formular de Contact",
    cms: "CMS",
    "blog-section": "Secțiune Blog / Știri",
    payments: "Plăți Online / Magazin",
    booking: "Sistem de Rezervări",
    multilingual: "Suport Multilingv",
    seo: "Optimizare SEO",
    animations: "Animații / Efecte Interactive",
    urgent: "Urgent — în 2 săptămâni",
    "1-month": "Cam 1 lună",
    "2-3-months": "2–3 luni",
    flexible: "Nu mă grăbesc, sunt flexibil",
    "under-500": "Sub 500 RON",
    "500-1500": "500 – 1.500 RON",
    "1500-4000": "1.500 – 4.000 RON",
    "4000+": "4.000+ RON",
    unsure: "Nu sunt sigur încă",
  };

  const labelsEn: Record<string, string> = {
    portfolio: "Portfolio / Personal Website",
    business: "Business / Company Website",
    landing: "Landing Page",
    ecommerce: "E-commerce Store",
    blog: "Blog or Content Site",
    webapp: "Web Application",
    "full-package": "Full package (design + development)",
    "dev-only": "Development only",
    guidance: "Need guidance",
    redesign: "Redesign existing website",
    "contact-form": "Contact Form",
    cms: "CMS",
    "blog-section": "Blog / News section",
    payments: "Online Payments / Shop",
    booking: "Booking System",
    multilingual: "Multilingual Support",
    seo: "SEO Optimization",
    animations: "Animation / Interactive effects",
    urgent: "Urgent — within 2 weeks",
    "1-month": "About 1 month",
    "2-3-months": "2–3 months",
    flexible: "No rush, I'm flexible",
    "under-500": "Under 500 RON",
    "500-1500": "500 – 1,500 RON",
    "1500-4000": "1,500 – 4,000 RON",
    "4000+": "4,000+ RON",
    unsure: "Not sure yet",
  };

  const labels = language === "ro" ? labelsRo : labelsEn;
  return labels[value] || value;
}

function getPhotoWALabel(value: string, otherText: string | undefined, language: string): string {
  if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
  if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");

  const labelsRo: Record<string, string> = {
    "business-corporate": "Business / Corporate",
    product: "Fotografie de Produs",
    event: "Fotografie de Eveniment",
    portrait: "Ședință Foto Portret",
    "real-estate": "Imobiliare",
    food: "Fotografie Culinară",
    "your-location": "La locația ta",
    outdoor: "În aer liber",
    studio: "Studio",
    recommendations: "Am nevoie de recomandări",
    website: "Website",
    "social-media": "Social Media",
    marketing: "Campanie de Marketing",
    print: "Materiale Tipărite",
    personal: "Uz Personal",
    urgent: "Urgent — în 2 săptămâni",
    "1-month": "Cam 1 lună",
    "2-3-months": "2–3 luni",
    flexible: "Nu mă grăbesc, sunt flexibil",
    "under-300": "Sub 300 RON",
    "300-800": "300 – 800 RON",
    "800-2000": "800 – 2.000 RON",
    "2000+": "2.000+ RON",
    unsure: "Nu sunt sigur încă",
  };

  const labelsEn: Record<string, string> = {
    "business-corporate": "Business / Corporate",
    product: "Product Photography",
    event: "Event Photography",
    portrait: "Portrait Session",
    "real-estate": "Real Estate",
    food: "Food Photography",
    "your-location": "At your location",
    outdoor: "Outdoor",
    studio: "Studio",
    recommendations: "Need recommendations",
    website: "Website",
    "social-media": "Social Media",
    marketing: "Marketing Campaign",
    print: "Print Materials",
    personal: "Personal Use",
    urgent: "Urgent — within 2 weeks",
    "1-month": "About 1 month",
    "2-3-months": "2–3 months",
    flexible: "No rush, I'm flexible",
    "under-300": "Under 300 RON",
    "300-800": "300 – 800 RON",
    "800-2000": "800 – 2,000 RON",
    "2000+": "2,000+ RON",
    unsure: "Not sure yet",
  };

  const labels = language === "ro" ? labelsRo : labelsEn;
  return labels[value] || value;
}

function getVideoWALabel(value: string, otherText: string | undefined, language: string): string {
  if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
  if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");

  const labelsRo: Record<string, string> = {
    "social-reels": "Reel-uri Social Media",
    youtube: "Video YouTube",
    promo: "Video Promoțional",
    event: "Rezumat Eveniment",
    podcast: "Podcast",
    "short-film": "Scurtmetraj",
    "have-all": "Am deja toate materialele",
    "have-some": "Am câteva materiale",
    "need-filming": "Am nevoie și de filmare",
    "not-sure": "Nu sunt sigur",
    clean: "Curat și Profesional",
    cinematic: "Cinematic",
    "fast-paced": "Rapid — Social Media",
    minimal: "Minimal",
    flexible: "Las la latitudinea ta",
    urgent: "Urgent — în 2 săptămâni",
    "1-month": "Cam 1 lună",
    "2-3-months": "2–3 luni",
    "under-300": "Sub 300 RON",
    "300-800": "300 – 800 RON",
    "800-2000": "800 – 2.000 RON",
    "2000+": "2.000+ RON",
    unsure: "Nu sunt sigur încă",
  };

  const labelsEn: Record<string, string> = {
    "social-reels": "Social Media Reels",
    youtube: "YouTube Video",
    promo: "Promotional Video",
    event: "Event Highlights",
    podcast: "Podcast",
    "short-film": "Short Film",
    "have-all": "I already have all footage",
    "have-some": "I have some footage",
    "need-filming": "I need filming too",
    "not-sure": "Not sure",
    clean: "Clean & Professional",
    cinematic: "Cinematic",
    "fast-paced": "Fast-paced Social Media",
    minimal: "Minimal",
    flexible: "I'll leave it to you",
    urgent: "Urgent — within 2 weeks",
    "1-month": "About 1 month",
    "2-3-months": "2–3 months",
    "under-300": "Under 300 RON",
    "300-800": "300 – 800 RON",
    "800-2000": "800 – 2,000 RON",
    "2000+": "2,000+ RON",
    unsure: "Not sure yet",
  };

  const labels = language === "ro" ? labelsRo : labelsEn;
  return labels[value] || value;
}

function formatServiceMessage(
  service: ServiceType,
  formState: QuoteFormState,
  labels: WhatsAppLabels,
  lang: string,
): string {
  if (service === "design") {
    const answers = formState.graphicDesign;
    const projectTypeValue =
      answers.projectType === "other" && answers.projectTypeOther
        ? answers.projectTypeOther
        : getDesignWALabel(answers.projectType, answers.projectTypeOther, lang);

    const lines = [
      labels.serviceDesign,
      `${labels.projectType} ${projectTypeValue}`,
      `${labels.status} ${getDesignWALabel(answers.projectStatus, undefined, lang)}`,
      `${labels.style} ${getDesignWALabel(answers.styleDirection, undefined, lang)}`,
      `${labels.timeline} ${getDesignWALabel(answers.timeline, undefined, lang)}`,
      `${labels.budget} ${getDesignWALabel(answers.budget, undefined, lang)}`,
    ];
    if (answers.notes) lines.push(`\n${labels.notes} ${answers.notes}`);
    return lines.join("\n");
  }

  if (service === "web") {
    const answers = formState.webDev;
    const projectTypeValue =
      answers.projectType === "other" && answers.projectTypeOther
        ? answers.projectTypeOther
        : getWebDevWALabel(answers.projectType, answers.projectTypeOther, lang);

    const featuresLabels =
      answers.features
        ?.map((f) => getWebDevWALabel(f, undefined, lang))
        .filter((f) => f !== "Not selected")
        .join(", ") || (lang === "ro" ? "Nimic specific" : "None specifically");

    const lines = [
      labels.serviceWeb,
      `${labels.projectType} ${projectTypeValue}`,
      `${labels.design} ${getWebDevWALabel(answers.designStatus, undefined, lang)}`,
      `${labels.features} ${featuresLabels}`,
      `${labels.timeline} ${getWebDevWALabel(answers.timeline, undefined, lang)}`,
      `${labels.budget} ${getWebDevWALabel(answers.budget, undefined, lang)}`,
    ];
    if (answers.notes) lines.push(`\n${labels.notes} ${answers.notes}`);
    return lines.join("\n");
  }

  if (service === "photography") {
    const answers = formState.photography;
    const projectTypeValue =
      answers.projectType === "other" && answers.projectTypeOther
        ? answers.projectTypeOther
        : getPhotoWALabel(answers.projectType, answers.projectTypeOther, lang);

    const lines = [
      labels.servicePhotography,
      `${labels.projectType} ${projectTypeValue}`,
      `${labels.location} ${getPhotoWALabel(answers.location, answers.locationOther, lang)}`,
      `${labels.purpose} ${getPhotoWALabel(answers.purpose, answers.purposeOther, lang)}`,
      `${labels.timeline} ${getPhotoWALabel(answers.timeline, undefined, lang)}`,
      `${labels.budget} ${getPhotoWALabel(answers.budget, undefined, lang)}`,
    ];
    if (answers.notes) lines.push(`\n${labels.notes} ${answers.notes}`);
    return lines.join("\n");
  }

  if (service === "video") {
    const answers = formState.videoEditing;
    const projectTypeValue =
      answers.projectType === "other" && answers.projectTypeOther
        ? answers.projectTypeOther
        : getVideoWALabel(answers.projectType, answers.projectTypeOther, lang);

    const lines = [
      labels.serviceVideo,
      `${labels.projectType} ${projectTypeValue}`,
      `${labels.footage} ${getVideoWALabel(answers.footageStatus, undefined, lang)}`,
      `${labels.style} ${getVideoWALabel(answers.editingStyle, undefined, lang)}`,
      `${labels.timeline} ${getVideoWALabel(answers.timeline, undefined, lang)}`,
      `${labels.budget} ${getVideoWALabel(answers.budget, undefined, lang)}`,
    ];
    if (answers.notes) lines.push(`\n${labels.notes} ${answers.notes}`);
    return lines.join("\n");
  }

  return "";
}

export function generateWhatsAppMessage(
  formState: QuoteFormState,
  language: string = "en",
): string {
  const labels = getLabels(language);
  const sections = formState.selectedServices.map((service) =>
    formatServiceMessage(service, formState, labels, language)
  );

  const message = [labels.greeting, ""];

  sections.forEach((section, index) => {
    if (index > 0) {
      message.push("---");
    }
    message.push(section);
  });

  return message.join("\n");
}

export function generateWhatsAppLink(
  formState: QuoteFormState,
  language: string = "en",
): string {
  const message = generateWhatsAppMessage(formState, language);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(
  formState: QuoteFormState,
  language: string = "en",
): void {
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
