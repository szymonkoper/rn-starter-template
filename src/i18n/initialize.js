import i18next from 'i18next'
import Pseudo from 'i18next-pseudo'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

import en from '../../translations/en.json'
import pl from '../../translations/pl.json'

const LOCALES = { en, pl }
const LOCALES_CODES = Object.keys(LOCALES)
const FALLBACK_LOCALE = en
const PSEUDO_LOCALE_KEY = 'pseudo'

function getAppSettingsLocale() {
  // TODO: Implement user chosen locale
  return null // PSEUDO_LOCALE_KEY
}

function getSystemLocale() {
  return getLocales()
    .map(({ languageCode }) => languageCode)
    .find(languageCode => LOCALES_CODES.includes(languageCode))
}

export default function initialize() {
  const pseudoLanguageConfig = {
    enabled: true,
    wrapped: true,
    languageToPseudo: PSEUDO_LOCALE_KEY,
    letterMultiplier: 3
  }

  const localeResources = Object.entries(LOCALES).reduce(
    (acc, [localeKey, locale]) => {
      acc[localeKey] = { translation: locale }
      return acc
    },
    {}
  )

  i18next
    .use(new Pseudo(pseudoLanguageConfig))
    .use(initReactI18next)
    .init({
      lng: getAppSettingsLocale() || getSystemLocale(),
      fallbackLng: FALLBACK_LOCALE.languageCode,
      resources: localeResources,
      interpolation: {
        escapeValue: false
      }
    })
}
