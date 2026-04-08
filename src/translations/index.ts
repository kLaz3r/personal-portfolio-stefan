import { en } from "./en";
import { ro } from "./ro";

export type Language = "en" | "ro";

export const translations = {
  en,
  ro,
} as const;

export type Translations = {
  navigation: {
    home: string;
    graphics: string;
    webdev: string;
    photography: string;
    about: string;
    themeToggleDark: string;
    themeToggleLight: string;
    mobileMenu: string;
    openMenu: string;
    closeMenu: string;
    languageToggle: string;
  };
  hero: {
    greeting: string;
    name: string;
    role1: string;
    role2: string;
    description: string;
    complex: string;
    beautiful: string;
    best: string;
    ctaButton: string;
  };
  graphics: {
    title: string;
    subtitle: string;
    toolsLabel: string;
    button: string;
  };
  webdev: {
    title: string;
    subtitle: string;
  };
  photos: {
    title: string;
    subtitle: string;
    camera: string;
    lenses: string;
    button: string;
  };
  about: {
    title: string;
  };
  projects: {
    liveSite: string;
    github: string;
    screenshotAlt: string;
  };
  graphicsModal: {
    close: string;
    client: string;
    type: string;
    dimensions: string;
    finish: string;
    description: string;
    toolsUsed: string;
    viewProject: string;
  };
  carousel: {
    label: string;
    previous: string;
    next: string;
    goToSlide: string;
    slide: string;
    of: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
  error: {
    title: string;
    message: string;
    retry: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    message: string;
    returnHome: string;
  };
  loading: {
    label: string;
    text: string;
  };
  metadata: {
    title: string;
    description: string;
    skipLink: string;
  };
  projectData: {
    photoweave: {
      title: string;
      description: string;
    };
    nuvtra: {
      title: string;
      description: string;
    };
    retroweb: {
      title: string;
      description: string;
    };
  };
  graphicsProjects: Record<string, {
    title: string;
    type: string;
    finish: string;
    description: string;
  }>;
  graphicsTypes: Record<string, string>;
  graphicsFinishes: Record<string, string>;
};

export function getTranslation(lang: Language): Translations {
  return translations[lang] as unknown as Translations;
}
