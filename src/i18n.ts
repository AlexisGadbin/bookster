import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector/cjs'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'

export const locales: string[] = ['en', 'fr']

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      fr,
      en,
    },
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
  })

export default i18n
