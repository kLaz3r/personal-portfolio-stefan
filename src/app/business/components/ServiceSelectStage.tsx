"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceOptions } from "../types";
import { ServiceType } from "../types";
import { useTranslation } from "@/hooks/useTranslation";
import { Globe } from "lucide-react";

interface ServiceSelectStageProps {
  onSelect: (service: ServiceType) => void;
  onBack: () => void;
  onLanguageChange: () => void;
}

export function ServiceSelectStage({
  onSelect,
  onBack,
  onLanguageChange,
}: ServiceSelectStageProps) {
  const { t, language } = useTranslation();

  const serviceLabels: Record<ServiceType, string> = {
    design: t("business.serviceSelect.design"),
    web: t("business.serviceSelect.web"),
    both: t("business.serviceSelect.both"),
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-8"
    >
      {/* Language toggle in top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onLanguageChange}
        className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-background-tertiary hover:text-foreground transition-colors"
      >
        <Globe className="size-4" />
        <span>{language === "en" ? "EN" : "RO"}</span>
      </motion.button>

      <div className="w-full max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-2 text-center font-montserrat text-2xl font-bold text-foreground md:text-3xl"
        >
          {t("business.serviceSelect.question")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8 text-center text-muted-foreground"
        >
          {t("business.serviceSelect.subtitle")}
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {serviceOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card
                className="cursor-pointer border-2 border-transparent transition-all hover:border-brand-primary/50 hover:shadow-lg active:scale-95"
                onClick={() => onSelect(option.value as ServiceType)}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="mb-3 text-4xl">{option.icon}</span>
                  <span className="font-montserrat font-semibold text-foreground">
                    {serviceLabels[option.value as ServiceType]}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-muted-foreground"
          >
            {t("business.common.back")}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
