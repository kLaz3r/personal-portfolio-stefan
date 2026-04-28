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
    blog: string;
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
  blogTeaser: {
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
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
  graphicsGallery: {
    title: string;
    subtitle: string;
    viewProject: string;
    noProjects: string;
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
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    backToHome: string;
    publishedOn: string;
    tags: string;
    noPosts: string;
    minuteRead: string;
    previousPost: string;
    nextPost: string;
  };
  business: {
    landing: {
      greeting: string;
      title: string;
      description: string;
      ctaButton: string;
      responseTime: string;
    };
    serviceSelect: {
      question: string;
      subtitle: string;
      design: string;
      web: string;
      both: string;
    };
    common: {
      back: string;
      continue: string;
      stepOf: string;
      partOf: string;
    };
    graphicDesign: {
      q1: {
        title: string;
        subtitle: string;
        otherLabel: string;
        placeholder: string;
      };
      q2: {
        title: string;
        subtitle: string;
      };
      q3: {
        title: string;
        subtitle: string;
      };
      q4: {
        title: string;
        subtitle: string;
      };
      q5: {
        title: string;
        subtitle: string;
      };
      q6: {
        title: string;
        subtitle: string;
        descriptionLabel: string;
        placeholder: string;
      };
    };
    webDev: {
      q1: {
        title: string;
        subtitle: string;
        otherLabel: string;
        placeholder: string;
      };
      q2: {
        title: string;
        subtitle: string;
      };
      q3: {
        title: string;
        subtitle: string;
      };
      q4: {
        title: string;
        subtitle: string;
      };
      q5: {
        title: string;
        subtitle: string;
      };
      q6: {
        title: string;
        subtitle: string;
        descriptionLabel: string;
        placeholder: string;
      };
    };
    summary: {
      title: string;
      subtitle: string;
      serviceDesign: string;
      serviceWeb: string;
      editButton: string;
      sendButton: string;
      partIndicator: string;
      labels: {
        projectType: string;
        status: string;
        style: string;
        timeline: string;
        budget: string;
        design: string;
        features: string;
        notes: string;
      };
    };
    whatsapp: {
      greeting: string;
    };
  };
};

export function getTranslation(lang: Language): Translations {
  return translations[lang] as unknown as Translations;
}
