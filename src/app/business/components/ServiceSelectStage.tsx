"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ServiceType, serviceOptions, allSingleServices } from "../types";
import { useTranslation } from "@/hooks/useTranslation";
import { Globe } from "lucide-react";

interface ServiceSelectStageProps {
  onSelect: (services: ServiceType[]) => void;
  onBack: () => void;
  onLanguageChange: () => void;
}

export function ServiceSelectStage({
  onSelect,
  onBack,
  onLanguageChange,
}: ServiceSelectStageProps) {
  const { t, language } = useTranslation();
  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);

  const serviceLabels: Record<ServiceType, string> = {
    design: t("business.serviceSelect.design"),
    web: t("business.serviceSelect.web"),
    photography: t("business.serviceSelect.photography"),
    video: t("business.serviceSelect.video"),
  };

  const serviceIcons: Record<ServiceType, string> = {
    design: "🎨",
    web: "💻",
    photography: "📸",
    video: "🎬",
  };

  const handleSingleSelect = (value: ServiceType | "multiple") => {
    if (value === "multiple") {
      setShowMultiSelect(true);
      setSelectedServices([]);
    } else {
      onSelect([value]);
    }
  };

  const toggleService = (service: ServiceType) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleMultiConfirm = () => {
    if (selectedServices.length >= 2) {
      onSelect(selectedServices);
    }
  };

  const handleBackToMain = () => {
    setShowMultiSelect(false);
    setSelectedServices([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-8"
    >
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
        <AnimatePresence mode="wait">
          {showMultiSelect ? (
            <motion.div
              key="multiselect"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-2 text-center font-montserrat text-2xl font-bold text-foreground md:text-3xl"
              >
                {t("business.serviceSelect.multiQuestion")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-8 text-center text-muted-foreground"
              >
                {t("business.serviceSelect.multiSubtitle")}
              </motion.p>

              <div className="grid gap-3">
                {allSingleServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                  >
                    <Card
                      className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                        selectedServices.includes(service)
                          ? "border-brand-primary bg-brand-primary/5"
                          : "border-transparent hover:border-brand-primary/30"
                      }`}
                      onClick={() => toggleService(service)}
                    >
                      <CardContent className="flex items-center gap-3 p-4">
                        <Checkbox
                          checked={selectedServices.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                          className="data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary"
                        />
                        <span className="text-2xl">{serviceIcons[service]}</span>
                        <span className="font-medium text-foreground">
                          {serviceLabels[service]}
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
                className="mt-8 flex justify-center gap-3"
              >
                <Button
                  variant="ghost"
                  onClick={handleBackToMain}
                  className="text-muted-foreground"
                >
                  {t("business.common.back")}
                </Button>
                <Button
                  onClick={handleMultiConfirm}
                  disabled={selectedServices.length < 2}
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                >
                  {t("business.common.continue")} ({selectedServices.length})
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
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
                      onClick={() => handleSingleSelect(option.value)}
                    >
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <span className="mb-3 text-4xl">{option.icon}</span>
                        <span className="font-montserrat font-semibold text-foreground">
                          {option.value === "multiple"
                            ? t("business.serviceSelect.multiple")
                            : serviceLabels[option.value]}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
