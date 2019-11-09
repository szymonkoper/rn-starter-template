import { getLocales } from 'react-native-localize'
import { FALLBACK_LOCALE, LOCALES_CODES } from '../../i18n/constants'

function getSystemLocale() {
  return getLocales()
    .map(({ languageCode }) => languageCode)
    .find(languageCode => LOCALES_CODES.includes(languageCode))
}

// eslint-disable-next-line import/prefer-default-export
export function languageSelector(settings) {
  return settings.language || getSystemLocale() || FALLBACK_LOCALE.languageCode
}
