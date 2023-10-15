import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_rs from './assets/locale/rs.json';
import translation_en from './assets/locale/en.json';

const resources = {
  rs: {
    translation: translation_rs,
  },
  en: {
    translation: translation_en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
