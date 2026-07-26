import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";
import type { Language } from "./translations";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

function isSupportedLanguage(value: string | null): value is Language {
  return value === "en" || value === "de";
}

function getStoredLanguage() {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeLanguage(language: Language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    return;
  }
}

function getInitialLanguage(): Language {
  const storedLanguage = getStoredLanguage();

  if (isSupportedLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    storeLanguage(language);
  }, [copy.meta.title, language]);

  const contextValue = useMemo(
    () => ({ language, setLanguage, copy }),
    [copy, language],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
