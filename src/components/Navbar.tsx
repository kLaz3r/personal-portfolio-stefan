"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  HiBriefcase,
  HiCamera,
  HiColorSwatch,
  HiHome,
  HiMenu,
  HiMoon,
  HiSun,
  HiUser,
  HiX,
  HiTranslate,
} from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="text-foreground hover:text-brand-primary inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="sr-only">
        {isOpen ? "Close main menu" : "Open main menu"}
      </span>
      {isOpen ? (
        <HiX className="block h-12 w-12" aria-hidden="true" />
      ) : (
        <HiMenu className="block h-12 w-12" aria-hidden="true" />
      )}
    </motion.button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const sections = ["home", "graphics", "webdev", "photos", "about"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        "a[href], button:not([disabled])",
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { key: "home", href: "/#home", icon: HiHome },
    { key: "graphics", href: "/#graphics", icon: HiColorSwatch },
    { key: "webdev", href: "/#webdev", icon: HiBriefcase },
    { key: "photography", href: "/#photos", icon: HiCamera },
    { key: "about", href: "/#about", icon: HiUser },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href: string) => {
    const sectionId = href.replace("/#", "");
    return activeSection === sectionId;
  };

  return (
    <nav className="gpu-accelerated fixed w-screen top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-brand-primary/50">
      <div className="container mx-auto w-screen">
        <div className="flex px-4 justify-between items-center h-16 md:h-20">
          <div className="pl-2 flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-brand-primary transition-colors"
            >
              {isMounted ? (
                <Image
                  src={
                    theme == "light"
                      ? "/Logo-light.svg"
                      : "/Logo-dark.svg"
                  }
                  alt="Logo"
                  className="h-10 w-10 md:h-14 md:w-14"
                  width={40}
                  height={40}
                />
              ) : (
                <div style={{ width: 40, height: 40 }} />
              )}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-1 py-2 rounded-md text-xl font-montserrat transition-all duration-200 hover:underline ${
                    isActive(item.href)
                      ? "text-brand-primary font-bold"
                      : "text-foreground hover:text-brand-primary"
                  }`}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              {isMounted && (
                <>
                  <button
                    onClick={toggleLanguage}
                    className="text-foreground hover:text-brand-primary p-3 rounded-md transition-colors duration-200 font-montserrat font-bold min-w-[3.5rem]"
                    aria-label={t("navigation.languageToggle")}
                  >
                    {language === "en" ? "EN" : "RO"}
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="text-foreground hover:text-brand-primary p-3 rounded-md transition-colors duration-200"
                    aria-label={
                      theme === "light"
                        ? t("navigation.themeToggleDark")
                        : t("navigation.themeToggleLight")
                    }
                  >
                    {theme === "light" ? (
                      <HiMoon className="h-8 w-8" />
                    ) : (
                      <HiSun className="h-8 w-8" />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {isMounted && (
              <>
                <button
                  onClick={toggleLanguage}
                  className="text-foreground hover:text-brand-primary p-2 rounded-md transition-colors duration-200 font-montserrat font-bold"
                  aria-label={t("navigation.languageToggle")}
                >
                  {language === "en" ? "EN" : "RO"}
                </button>
                <button
                  onClick={toggleTheme}
                  className="text-foreground hover:text-brand-primary p-2 rounded-md transition-colors duration-200"
                  aria-label={
                    theme === "light"
                      ? t("navigation.themeToggleDark")
                      : t("navigation.themeToggleLight")
                  }
                >
                  {theme === "light" ? (
                    <HiMoon className="h-8 w-8" />
                  ) : (
                    <HiSun className="h-8 w-8" />
                  )}
                </button>
              </>
            )}
            <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t("navigation.mobileMenu")}
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 flex flex-col justify-center items-start sm:px-3 border-t border-foreground/10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    ref={index === 0 ? firstFocusableRef : undefined}
                    href={item.href}
                    className={`hover:bg-foreground/5 px-3 py-3 rounded-md text-4xl font-montserrat transition-colors duration-200 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                      isActive(item.href)
                        ? "text-brand-primary font-bold"
                        : "text-foreground hover:text-brand-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                    scroll={true}
                  >
                    <item.icon className="mr-3 h-14 w-14" aria-hidden="true" />
                    {t(`navigation.${item.key}`)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
