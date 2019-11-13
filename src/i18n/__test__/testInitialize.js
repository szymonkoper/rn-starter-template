import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
  lng: 'pl',
  fallbackLng: 'en',
  resources: {
    en: { languageCode: 'en' },
    pl: { languageCode: 'pl' }
  },
  // debug: true, // to check for incorrect translation keys
  interpolation: {
    escapeValue: false // not needed for react!!
  }
})

export default i18next
