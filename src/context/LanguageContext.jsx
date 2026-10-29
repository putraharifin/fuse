import { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "ietm-lang";
const DEFAULT_LANG = "id";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage tidak tersedia (mode privat, dll.) -> pakai default
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    // Sinkronkan atribut <html lang>, judul tab, dan simpan pilihan
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // abaikan
    }
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage harus dipakai di dalam <LanguageProvider>");
  }
  return context;
}