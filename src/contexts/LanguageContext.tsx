"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ro";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const persistedLanguage = window.localStorage.getItem("language");
    if (persistedLanguage === "ro") {
      return "ro";
    }
    return "en";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ro" : "en"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
