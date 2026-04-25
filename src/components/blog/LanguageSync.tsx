"use client";

import { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface LanguageSyncProps {
  lang: "en" | "ro";
}

export const LanguageSync = ({ lang }: LanguageSyncProps): null => {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);

  return null;
};
