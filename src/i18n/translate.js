import i18next from 'i18next'
import { getLocales } from 'react-native-localize'

import en from '../../translations/en.json'
import pl from '../../translations/pl.json'

const LOCALES = { en, pl }
const LOCALES_CODES = Object.keys(LOCALES)
const FALLBACK_LOCALE = en

function getSystemLocale() {
  return getLocales()
    .map(({ languageCode }) => languageCode)
    .find(languageCode => LOCALES_CODES.includes(languageCode))
}

export default function translate(key, vars = {}) {
  return i18next.t(key, vars)
}

export function initialize() {
  const localeResources = Object.entries(LOCALES).reduce(
    (acc, [localeKey, locale]) => {
      acc[localeKey] = { translation: locale }
      return acc
    },
    {}
  )

  i18next.init({
    lng: getSystemLocale(),
    fallbackLng: FALLBACK_LOCALE.languageCode,
    resources: localeResources
  })
}

initialize() // TODO: Move it somewhere else
