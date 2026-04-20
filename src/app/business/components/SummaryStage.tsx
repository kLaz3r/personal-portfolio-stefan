"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteFormState } from "../types";
import { ArrowLeft, Send, Pencil } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Globe } from "lucide-react";

interface SummaryStageProps {
  formState: QuoteFormState;
  onBack: () => void;
  onEdit: () => void;
  onSend: () => void;
  onLanguageChange?: () => void;
}

export function SummaryStage({
  formState,
  onBack,
  onEdit,
  onSend,
  onLanguageChange,
}: SummaryStageProps) {
  const { t, language } = useTranslation();

  // Get label for design option
  const getDesignLabel = (value: string, otherText?: string): string => {
    if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
    if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");

    const labels: Record<string, string> = {
      // Project types
      "logo-brand": language === "ro" ? "Logo și Identitate de Brand" : "Logo & Brand Identity",
      "social-media": language === "ro" ? "Conținut Social Media / Template-uri" : "Social Media Content / Templates",
      "print": language === "ro" ? "Materiale Print (flyere, postere, broșuri, cărți de vizită)" : "Print Materials (flyers, posters, brochures, business cards)",
      "packaging": language === "ro" ? "Design Ambalaje" : "Packaging Design",
      "illustration": language === "ro" ? "Ilustrații / Artwork Personalizat" : "Illustration / Custom Artwork",
      // Project status
      "scratch": language === "ro" ? "Încep de la zero — încă nu am brand" : "Starting from scratch — no brand yet",
      "refresh": language === "ro" ? "Am un brand dar am nevoie de un refresh" : "I have a brand but need a refresh",
      "deliverables": language === "ro" ? "Brandul meu este setat, doar livrabilele lipsesc" : "My brand is set, just need deliverables",
      "unsure": language === "ro" ? "Nu sunt sigur încă" : "I'm not sure yet",
      // Style direction
      "minimal": language === "ro" ? "Curat și Minimal" : "Clean & Minimal",
      "bold": language === "ro" ? "Îndrăzneț și Expresiv" : "Bold & Expressive",
      "elegant": language === "ro" ? "Elegant și de Lux" : "Elegant & Luxury",
      "playful": language === "ro" ? "Jucăuș și Distractiv" : "Playful & Fun",
      "corporate": language === "ro" ? "Corporativ și Profesional" : "Corporate & Professional",
      "flexible": language === "ro" ? "Las la latitudinea ta" : "I'll leave it to you",
      // Timeline
      "urgent": language === "ro" ? "Urgent — în 2 săptămâni" : "Urgent — within 2 weeks",
      "1-month": language === "ro" ? "Cam 1 lună" : "About 1 month",
      "2-3-months": language === "ro" ? "2–3 luni" : "2–3 months",
      // Budget
      "under-150": language === "ro" ? "Sub 150 RON" : "Under 150 RON",
      "150-500": "150 – 500 RON",
      "500-1500": language === "ro" ? "500 – 1.500 RON" : "500 – 1,500 RON",
      "1500+": "1,500+ RON",
      "under-500": language === "ro" ? "Sub 500 RON" : "Under 500 RON",
      "1500-4000": language === "ro" ? "1.500 – 4.000 RON" : "1,500 – 4,000 RON",
      "4000+": "4,000+ RON",
    };
    return labels[value] || value;
  };

  // Get label for web dev option
  const getWebDevLabel = (value: string, otherText?: string): string => {
    if (!value) return language === "ro" ? "Nu este selectat" : "Not selected";
    if (value === "other") return otherText || (language === "ro" ? "Altceva" : "Other");
    if (value === "none") return language === "ro" ? "Nimic specific" : "None specifically";

    const labels: Record<string, string> = {
      // Project types
      "portfolio": language === "ro" ? "Portofoliu / Website Personal" : "Portfolio / Personal Website",
      "business": language === "ro" ? "Website Business / Companie" : "Business / Company Website",
      "landing": language === "ro" ? "Landing Page (pagină unică, focusat pe conversie)" : "Landing Page (single page, conversion-focused)",
      "ecommerce": language === "ro" ? "Magazin Online" : "E-commerce Store",
      "blog": language === "ro" ? "Blog sau Site de Conținut" : "Blog or Content Site",
      "webapp": language === "ro" ? "Aplicație Web" : "Web Application",
      // Design status
      "full-package": language === "ro" ? "Am nevoie de design + development (pachet complet)" : "I need design + development (full package)",
      "dev-only": language === "ro" ? "Am design-uri/mockup-uri gata — doar development" : "I have designs/mockups ready — just development",
      "guidance": language === "ro" ? "Am o idee vagă — am nevoie de ghidare" : "I have a rough idea — need guidance",
      "redesign": language === "ro" ? "Redesign al unui website existent" : "Redesign of an existing website",
      // Features
      "contact-form": language === "ro" ? "Formular de Contact" : "Contact Form",
      "cms": language === "ro" ? "CMS / Abilitatea de a edita conținutul singur" : "CMS / Ability to edit content myself",
      "blog-feature": language === "ro" ? "Secțiune Blog / Știri" : "Blog / News section",
      "payments": language === "ro" ? "Plăți Online / Magazin" : "Online Payments / Shop",
      "booking": language === "ro" ? "Sistem de Rezervări / Programări" : "Booking / Appointment System",
      "multilingual": language === "ro" ? "Suport Multilingv" : "Multilingual Support",
      "seo": language === "ro" ? "Optimizare SEO" : "SEO Optimization",
      "animations": language === "ro" ? "Animații / Efecte Interactive" : "Animation / Interactive effects",
      // Timeline
      "urgent-wd": language === "ro" ? "Urgent — în 2 săptămâni" : "Urgent — within 2 weeks",
      "1-month-wd": language === "ro" ? "Cam 1 lună" : "About 1 month",
      "2-3-months-wd": language === "ro" ? "2–3 luni" : "2–3 months",
      "flexible-wd": language === "ro" ? "Nu mă grăbesc, sunt flexibil" : "No rush, I'm flexible",
      // Budget
      "under-500": language === "ro" ? "Sub 500 RON" : "Under 500 RON",
      "500-1500": language === "ro" ? "500 – 1.500 RON" : "500 – 1,500 RON",
      "1500-4000": language === "ro" ? "1.500 – 4.000 RON" : "1,500 – 4,000 RON",
      "4000+": "4,000+ RON",
      "unsure": language === "ro" ? "Nu sunt sigur încă, deschis la sugestii" : "Not sure yet, open to suggestions",
    };
    return labels[value] || value;
  };

  const getDesignSummary = () => {
    const { graphicDesign } = formState;

    const projectTypeValue = graphicDesign.projectType === "other"
      ? (graphicDesign.projectTypeOther || getDesignLabel("other"))
      : getDesignLabel(graphicDesign.projectType);

    return {
      service: t("business.summary.serviceDesign"),
      items: [
        { emoji: "📌", label: t("business.summary.labels.projectType"), value: projectTypeValue },
        { emoji: "📊", label: t("business.summary.labels.status"), value: getDesignLabel(graphicDesign.projectStatus) },
        { emoji: "✏️", label: t("business.summary.labels.style"), value: getDesignLabel(graphicDesign.styleDirection) },
        { emoji: "📅", label: t("business.summary.labels.timeline"), value: getDesignLabel(graphicDesign.timeline) },
        { emoji: "💰", label: t("business.summary.labels.budget"), value: getDesignLabel(graphicDesign.budget) },
        ...(graphicDesign.notes
          ? [{ emoji: "📝", label: t("business.summary.labels.notes"), value: graphicDesign.notes }]
          : []),
      ],
    };
  };

  const getWebDevSummary = () => {
    const { webDev } = formState;

    const projectTypeValue = webDev.projectType === "other"
      ? (webDev.projectTypeOther || getWebDevLabel("other"))
      : getWebDevLabel(webDev.projectType);

    const featuresLabels = webDev.features
      ?.map((f) => getWebDevLabel(f))
      .filter((f) => f !== "Not selected")
      .join(", ") || (language === "ro" ? "Nimic selectat" : "None selected");

    return {
      service: t("business.summary.serviceWeb"),
      items: [
        { emoji: "📌", label: t("business.summary.labels.projectType"), value: projectTypeValue },
        { emoji: "🎨", label: t("business.summary.labels.design"), value: getWebDevLabel(webDev.designStatus) },
        { emoji: "⚙️", label: t("business.summary.labels.features"), value: featuresLabels },
        { emoji: "📅", label: t("business.summary.labels.timeline"), value: getWebDevLabel(webDev.timeline) },
        { emoji: "💰", label: t("business.summary.labels.budget"), value: getWebDevLabel(webDev.budget) },
        ...(webDev.notes ? [{ emoji: "📝", label: t("business.summary.labels.notes"), value: webDev.notes }] : []),
      ],
    };
  };

  const summaries = [];

  if (formState.service === "design" || formState.service === "both") {
    summaries.push(getDesignSummary());
  }

  if (formState.service === "web" || formState.service === "both") {
    summaries.push(getWebDevSummary());
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-8"
    >
      <div className="w-full max-w-2xl relative">
        {/* Language toggle */}
        {onLanguageChange && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onLanguageChange}
            className="absolute -top-2 right-0 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-background-tertiary hover:text-foreground transition-colors"
          >
            <Globe className="size-4" />
            <span>{language === "en" ? "EN" : "RO"}</span>
          </motion.button>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="mb-2 text-center font-montserrat text-2xl font-bold text-foreground md:text-3xl">
            {t("business.summary.title")}
          </h2>
          <p className="text-center text-muted-foreground">
            {t("business.summary.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {summaries.map((summary, idx) => (
            <motion.div
              key={summary.service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-lg">
                    {formState.service === "both" && (
                      <span className="mr-2 text-brand-primary">
                        {t("business.summary.partIndicator", {
                          part: (idx + 1).toString(),
                          total: "2",
                        })}
                        {" — "}
                      </span>
                    )}
                    {summary.service}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {summary.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {item.label}:
                        </span>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Button variant="outline" onClick={onBack} className="gap-2">
            <ArrowLeft className="size-4" />
            {t("business.common.back")}
          </Button>
          <Button variant="outline" onClick={onEdit} className="gap-2">
            <Pencil className="size-4" />
            {t("business.summary.editButton")}
          </Button>
          <Button
            onClick={onSend}
            className="gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white"
          >
            <Send className="size-4" />
            {t("business.summary.sendButton")}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
