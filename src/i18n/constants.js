import en from '../../translations/en.json'
import pl from '../../translations/pl.json'

export const PSEUDO_LOCALE_CODE = 'pseudo'

export const LOCALES = {
  ...{ en, pl },
  ...(__DEV__ ? { [PSEUDO_LOCALE_CODE]: en } : {})
}
export const LOCALES_CODES = Object.keys(LOCALES)
export const FALLBACK_LOCALE = en
