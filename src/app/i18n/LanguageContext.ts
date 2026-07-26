import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Language, TranslationDictionary } from "./translations";

export type LanguageContextValue = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  copy: TranslationDictionary;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
