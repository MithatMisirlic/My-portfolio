export type Language = "en" | "de";

export type ProjectTranslationKey =
  | "virtualMachine"
  | "databaseProject"
  | "seoProject";

export type SkillCategoryKey = "frontend" | "backend" | "tools" | "other";

export type RichTextSegment = {
  text: string;
  emphasis?: boolean;
};

export type TranslationDictionary = {
  meta: {
    title: string;
  };
  header: {
    primaryNavigationLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    contactAction: string;
    languageSwitcherLabel: string;
    languageOptionLabels: Record<Language, string>;
    navigation: {
      home: string;
      about: string;
      projects: string;
      skills: string;
      contact: string;
    };
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  hero: {
    role: string;
    description: string;
    viewProjects: string;
    viewCv: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  about: {
    heading: string;
    paragraphs: readonly (readonly RichTextSegment[])[];
    facts: {
      location: {
        label: string;
        value: string;
      };
      university: {
        label: string;
        value: string;
      };
      focus: {
        label: string;
        value: string;
      };
      opportunities: {
        label: string;
        value: string;
      };
    };
  };
  projects: {
    heading: string;
    subtitle: string;
    selectorLabel: string;
    selectorAriaLabel: string;
    selectProjectAriaPrefix: string;
    previewAltSuffix: string;
    previewLinkAriaPrefix: string;
    counterAriaPrefix: string;
    counterAriaConnector: string;
    previousProjectLabel: string;
    nextProjectLabel: string;
    sourceLabel: string;
    demoLabel: string;
    sourceAriaPrefix: string;
    demoAriaPrefix: string;
    items: Record<
      ProjectTranslationKey,
      {
        description: string;
        tags: readonly string[];
      }
    >;
  };
  skills: {
    heading: string;
    subtitle: string;
    categories: Record<SkillCategoryKey, string>;
  };
  contact: {
    heading: string;
    subtitle: string;
    form: {
      heading: string;
      description: string;
      subject: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
    };
    items: {
      email: string;
      github: string;
      linkedin: string;
    };
    profileAriaLabels: {
      github: string;
      linkedin: string;
    };
  };
  footer: {
    role: string;
    socialLinksLabel: string;
    designedBy: string;
    copyright: string;
  };
};

const english: TranslationDictionary = {
  meta: {
    title: "Mithat Misirlic | Web Developer",
  },
  header: {
    primaryNavigationLabel: "Primary navigation",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    contactAction: "Let's Talk",
    languageSwitcherLabel: "Select language",
    languageOptionLabels: {
      en: "Switch to English",
      de: "Switch to German",
    },
    navigation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
  },
  theme: {
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
  },
  hero: {
    role: "Full-Stack Web Development Student",
    description:
      "Building responsive web applications using React, Node.js, and modern web technologies.",
    viewProjects: "View Projects",
    viewCv: "View CV",
    githubLabel: "Mithat Misirlic on GitHub",
    linkedinLabel: "Mithat Misirlic on LinkedIn",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      [
        { text: "I like owning decisions and taking on challenges that make a product better for the people using it. As a working student in " },
        {
          text: "Campus Management & Student Communication at SRH",
          emphasis: true,
        },
        { text: ", I talk with students every day. Those conversations show me what students need and where we can make campus life better." },
      ],
      [
        { text: "I bring that same approach to web development. I build with " },
        { text: "React", emphasis: true },
        { text: " and " },
        { text: "Node.js", emphasis: true },
        {
          text: ", and I like talking ideas through. I listen when someone sees things differently, and I’ll say so if I get it wrong.",
        },
      ],
      [
        {
          text: "I want to take that responsibility into a more technical role. I’m open to ",
        },
        { text: "technical project management", emphasis: true },
        { text: " opportunities and to development roles with room to grow into project management." },
      ],
    ],
    facts: {
      location: {
        label: "Location",
        value: "Berlin, Germany",
      },
      university: {
        label: "University",
        value: "SRH Berlin",
      },
      focus: {
        label: "Focus",
        value: "Frontend & full-stack development",
      },
      opportunities: {
        label: "Opportunities",
        value: "Internships or working student positions",
      },
    },
  },
  projects: {
    heading: "Projects",
    subtitle: "Real projects I've built while learning web development",
    selectorLabel: "Project Index",
    selectorAriaLabel: "Choose a project",
    selectProjectAriaPrefix: "Select project",
    previewAltSuffix: "project preview",
    previewLinkAriaPrefix: "Open live preview for",
    counterAriaPrefix: "Project",
    counterAriaConnector: "of",
    previousProjectLabel: "Previous project",
    nextProjectLabel: "Next project",
    sourceLabel: "GitHub",
    demoLabel: "Live Demo",
    sourceAriaPrefix: "Open GitHub repository for",
    demoAriaPrefix: "Open live demo for",
    items: {
      virtualMachine: {
        description:
          "An interactive web application simulating a virtual machine environment built with React, demonstrating state management and component architecture.",
        tags: ["React", "JavaScript", "State Management"],
      },
      databaseProject: {
        description:
          "A database-driven application for managing and processing VDE-AR-N 4105 Form E.1 data, implementing CRUD operations and data validation.",
        tags: ["Node.js", "Database", "REST API"],
      },
      seoProject: {
        description:
          "A content-focused project centered on SEO/SEM optimization, structure, and visibility improvements for web presence and digital marketing outcomes.",
        tags: ["HTML5", "CSS", "SEO-SEM Optimization"],
      },
    },
  },
  skills: {
    heading: "Skills",
    subtitle: "Technologies and tools I work with",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      other: "AI & Other",
    },
  },
  contact: {
    heading: "Contact",
    subtitle: "Feel free to reach out for collaboration or opportunities",
    form: {
      heading: "Send a Message",
      description: "Share a few details about your project or opportunity.",
      subject: "New Portfolio Message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or opportunity...",
      submitLabel: "Send Message",
    },
    items: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    profileAriaLabels: {
      github: "Open GitHub profile",
      linkedin: "Open LinkedIn profile",
    },
  },
  footer: {
    role: "Web Developer",
    socialLinksLabel: "Social links",
    designedBy: "Designed and developed by Mithat Misirlic.",
    copyright: "© 2026 Mithat Misirlic. All rights reserved.",
  },
};

const german: TranslationDictionary = {
  meta: {
    title: "Mithat Misirlic | Webentwickler",
  },
  header: {
    primaryNavigationLabel: "Hauptnavigation",
    openMenuLabel: "Navigationsmenü öffnen",
    closeMenuLabel: "Navigationsmenü schließen",
    contactAction: "Kontakt",
    languageSwitcherLabel: "Sprache auswählen",
    languageOptionLabels: {
      en: "Auf Englisch wechseln",
      de: "Auf Deutsch wechseln",
    },
    navigation: {
      home: "Start",
      about: "Über mich",
      projects: "Projekte",
      skills: "Kenntnisse",
      contact: "Kontakt",
    },
  },
  theme: {
    switchToLight: "Zum hellen Design wechseln",
    switchToDark: "Zum dunklen Design wechseln",
  },
  hero: {
    role: "Student für Full-Stack-Webentwicklung",
    description:
      "Entwicklung responsiver Webanwendungen mit React, Node.js und modernen Webtechnologien.",
    viewProjects: "Projekte ansehen",
    viewCv: "Lebenslauf",
    githubLabel: "Mithat Misirlic auf GitHub",
    linkedinLabel: "Mithat Misirlic auf LinkedIn",
  },
  about: {
    heading: "Über mich",
    paragraphs: [
      [
        { text: "Ich übernehme gern Verantwortung für Entscheidungen und packe Herausforderungen an, die ein Produkt für die Menschen verbessern, die es nutzen. Als Werkstudent im Bereich " },
        {
          text: "Campus Management & Student Communication an der SRH",
          emphasis: true,
        },
        { text: " spreche ich täglich mit Studierenden. In diesen Gesprächen erfahre ich, was sie brauchen und wo wir den Campusalltag verbessern können." },
      ],
      [
        { text: "So gehe ich auch an die Webentwicklung heran. Ich arbeite mit " },
        { text: "React", emphasis: true },
        { text: " und " },
        { text: "Node.js", emphasis: true },
        {
          text: " und bespreche Ideen gern im Team. Ich höre zu, wenn jemand die Sache anders sieht, und sage es offen, wenn ich falschlag.",
        },
      ],
      [
        {
          text: "Diese Verantwortung möchte ich künftig in einer technischeren Rolle übernehmen. Ich bin offen für Positionen im ",
        },
        { text: "technischen Projektmanagement", emphasis: true },
        { text: " und für Entwicklerstellen, in denen ich ins Projektmanagement hineinwachsen kann." },
      ],
    ],
    facts: {
      location: {
        label: "Standort",
        value: "Berlin, Deutschland",
      },
      university: {
        label: "Hochschule",
        value: "SRH Berlin",
      },
      focus: {
        label: "Schwerpunkt",
        value: "Frontend- & Full-Stack-Entwicklung",
      },
      opportunities: {
        label: "Möglichkeiten",
        value: "Praktikum oder Werkstudentenstelle",
      },
    },
  },
  projects: {
    heading: "Projekte",
    subtitle: "Praxisprojekte aus meinem Studium der Webentwicklung",
    selectorLabel: "Projektauswahl",
    selectorAriaLabel: "Projekt auswählen",
    selectProjectAriaPrefix: "Projekt auswählen:",
    previewAltSuffix: "Projektvorschau",
    previewLinkAriaPrefix: "Live-Vorschau öffnen für",
    counterAriaPrefix: "Projekt",
    counterAriaConnector: "von",
    previousProjectLabel: "Vorheriges Projekt",
    nextProjectLabel: "Nächstes Projekt",
    sourceLabel: "GitHub",
    demoLabel: "Live-Demo",
    sourceAriaPrefix: "GitHub-Repository öffnen für",
    demoAriaPrefix: "Live-Demo öffnen für",
    items: {
      virtualMachine: {
        description:
          "Eine interaktive React-Webanwendung, die eine virtuelle Maschinenumgebung simuliert und State-Management sowie komponentenbasierte Architektur demonstriert.",
        tags: ["React", "JavaScript", "State-Management"],
      },
      databaseProject: {
        description:
          "Eine datenbankgestützte Anwendung zur Verwaltung und Verarbeitung von Daten des VDE-AR-N 4105 Formblatts E.1 mit CRUD-Operationen und Datenvalidierung.",
        tags: ["Node.js", "Datenbank", "REST API"],
      },
      seoProject: {
        description:
          "Ein inhaltsorientiertes Projekt zu SEO/SEM-Optimierung, Struktur und Sichtbarkeit mit dem Ziel, Webpräsenz und digitale Marketing-Ergebnisse zu verbessern.",
        tags: ["HTML5", "CSS", "SEO/SEM-Optimierung"],
      },
    },
  },
  skills: {
    heading: "Kenntnisse",
    subtitle: "Technologien und Werkzeuge, mit denen ich arbeite",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Werkzeuge",
      other: "KI & Weitere",
    },
  },
  contact: {
    heading: "Kontakt",
    subtitle: "Kontaktieren Sie mich gerne für Projekte oder berufliche Chancen",
    form: {
      heading: "Nachricht senden",
      description:
        "Teilen Sie mir kurz mit, worum es bei Ihrem Projekt oder Ihrer Anfrage geht.",
      subject: "Neue Portfolio-Nachricht",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "ihre.email@beispiel.de",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir kurz von Ihrem Projekt oder Anliegen...",
      submitLabel: "Nachricht senden",
    },
    items: {
      email: "E-Mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    profileAriaLabels: {
      github: "GitHub-Profil öffnen",
      linkedin: "LinkedIn-Profil öffnen",
    },
  },
  footer: {
    role: "Webentwickler",
    socialLinksLabel: "Soziale Netzwerke",
    designedBy: "Entworfen und entwickelt von Mithat Misirlic.",
    copyright: "© 2026 Mithat Misirlic. Alle Rechte vorbehalten.",
  },
};

export const translations: Record<Language, TranslationDictionary> = {
  en: english,
  de: german,
};

export const languageOptions: readonly {
  code: Language;
  shortLabel: string;
}[] = [
  { code: "en", shortLabel: "EN" },
  { code: "de", shortLabel: "DE" },
];
