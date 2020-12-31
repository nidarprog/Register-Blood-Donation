import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locals/en/translationEn.json";
import translationNo from "./locals/no/translationNo.json";

const resources = {
  en: {
    translation: translationEn,
  },
  no: {
    translation: translationNo,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "no",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
