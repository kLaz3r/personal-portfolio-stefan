"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

interface LanguageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LanguageSelector({ isOpen, onClose }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as const, label: "English", flag: "🇬🇧" },
    { code: "ro" as const, label: "Română", flag: "🇷🇴" },
  ];

  const handleSelect = (lang: "en" | "ro") => {
    setLanguage(lang);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-montserrat text-xl">
            Select Language / Selectează Limba
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {languages.map((lang) => (
            <motion.div
              key={lang.code}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={language === lang.code ? "default" : "outline"}
                onClick={() => handleSelect(lang.code)}
                className={`w-full h-14 justify-between px-6 text-left ${
                  language === lang.code
                    ? "bg-brand-primary hover:bg-brand-primary/90 text-white"
                    : "hover:bg-background-tertiary"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.label}</span>
                </span>
                {language === lang.code && (
                  <Check className="size-5 text-white" />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
