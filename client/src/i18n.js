import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en_us.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: enUS } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
