import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en.json"
import es from "./locales/es.json"

i18n.use(initReactI18next).init({
  lng: "en",
  ns: {
    namespaces: ["dashboard"],
    defaultNS: "common",
  },
  fallbackLng: "en",
  resources: {
    en: en,
    es: es,
  },
})

export default i18n
