import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en"
import es from "./locales/es"

i18n.use(initReactI18next).init({
  lng: "es",
  ns: {
    namespaces: ["dashboard"],
    defaultNS: "common",
  },
  fallbackLng: "es",
  resources: {
    en: en,
    es: es,
  },
})

export default i18n
