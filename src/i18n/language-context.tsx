import { createContext, useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "@/types/language";
import type { Translation } from "@/types/translation";
import { translations } from "@/i18n/translations";

interface LanguageContextValue {
  language: Language;
  translation: Translation;
  setLanguage: (language: Language) => void;
}

const STORAGE_KEY = "portfolio:language";
const FALLBACK_LANGUAGE: Language = "en";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return FALLBACK_LANGUAGE;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && stored in translations) {
    return stored;
  }

  const browserLanguage = window.navigator.language.slice(0, 2) as Language;
  return browserLanguage in translations ? browserLanguage : FALLBACK_LANGUAGE;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      translation: translations[language],
      setLanguage,
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
