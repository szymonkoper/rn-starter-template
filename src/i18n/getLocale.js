import { getLocales } from 'react-native-localize'
import { FALLBACK_LOCALE, LOCALES_CODES } from './constants'

function getSystemLocale() {
  return getLocales()
    .map(({ languageCode }) => languageCode)
    .find(languageCode => LOCALES_CODES.includes(languageCode))
}

export default function(inAppLocale = null) {
  return inAppLocale || getSystemLocale() || FALLBACK_LOCALE.languageCode
}
