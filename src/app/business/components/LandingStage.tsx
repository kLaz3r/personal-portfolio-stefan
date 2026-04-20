"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface LandingStageProps {
  onStart: () => void;
}

export function LandingStage({ onStart }: LandingStageProps) {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [showLanguageSelect, setShowLanguageSelect] = useState(true);

  const languages = [
    { code: "en" as const, label: "English", flag: "🇬🇧" },
    { code: "ro" as const, label: "Română", flag: "🇷🇴" },
  ];

  const handleLanguageSelect = (lang: "en" | "ro") => {
    setLanguage(lang);
    setShowLanguageSelect(false);
  };

  if (showLanguageSelect) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-2 font-montserrat text-2xl font-bold text-foreground"
        >
          Select Language / Selectează Limba
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-muted-foreground"
        >
          Choose your preferred language to continue
        </motion.p>

        <div className="grid w-full max-w-sm gap-3">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Button
                variant={language === lang.code ? "default" : "outline"}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`h-14 w-full justify-between px-6 ${
                  language === lang.code
                    ? "bg-brand-primary text-white hover:bg-brand-primary/90"
                    : "hover:bg-background-tertiary"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.label}</span>
                </span>
                {language === lang.code && <Check className="size-5" />}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center"
    >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.3 }}
        onClick={() => setShowLanguageSelect(true)}
        className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-background-tertiary hover:text-foreground transition-colors"
      >
        <span>{languages.find((l) => l.code === language)?.flag}</span>
        <span>{language.toUpperCase()}</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-6xl">{t("business.landing.greeting")}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4 font-montserrat text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
      >
        {t("business.landing.title", { great: "great" })}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 max-w-md text-lg text-muted-foreground"
      >
        {t("business.landing.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          onClick={onStart}
          size="lg"
          className="h-14 px-8 text-lg font-semibold bg-brand-primary hover:bg-brand-primary/90 text-white"
        >
          {t("business.landing.ctaButton")}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-12 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <span className="size-2 rounded-full bg-green-500" />
        {t("business.landing.responseTime")}
      </motion.div>
    </motion.div>
  );
}
