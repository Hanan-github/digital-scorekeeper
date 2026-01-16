import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import global_es from "./locales/es/global.json";
import global_en from "./locales/en/global.json";
import global_fr from "./locales/fr/global.json";
import global_pt from "./locales/pt/global.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
      fr: {
        global: global_fr,
      },
      pt: {
        global: global_pt,
      },
    },
    fallbackLng: "es",
    ns: ["global"],
    defaultNS: "global",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
