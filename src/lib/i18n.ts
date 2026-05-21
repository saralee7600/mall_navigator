import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import he from '../locales/he.json';

const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? 'en';
const defaultLanguage = deviceLanguage.startsWith('he') ? 'he' : 'en';

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    he: { translation: he },
  },
  lng: defaultLanguage,
  fallbackLng: 'en',
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
