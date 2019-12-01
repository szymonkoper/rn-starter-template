import i18next from 'i18next'
import Pseudo from 'i18next-pseudo'
import { initReactI18next } from 'react-i18next'
import { languageSelector } from 'reducers/settings/selectors'
import getLocale from './getLocale'
import { FALLBACK_LOCALE, LOCALES, PSEUDO_LOCALE_CODE } from './constants'

export default function initialize(store) {
  const pseudoLanguageConfig = {
    enabled: true,
    wrapped: true,
    languageToPseudo: PSEUDO_LOCALE_CODE,
    letterMultiplier: 3
  }

  const language = getLocale(languageSelector(store.getState().settings))

  const localeResources = Object.entries(LOCALES).reduce(
    (acc, [localeKey, locale]) => {
      acc[localeKey] = { translation: locale }
      return acc
    },
    {
      [PSEUDO_LOCALE_CODE]: {
        translation: { ...FALLBACK_LOCALE, languageCode: PSEUDO_LOCALE_CODE }
      }
    }
  )

  i18next
    .use(new Pseudo(pseudoLanguageConfig))
    .use(initReactI18next)
    .init({
      lng: language,
      fallbackLng: FALLBACK_LOCALE.languageCode,
      postProcess: [PSEUDO_LOCALE_CODE],
      resources: localeResources,
      interpolation: {
        escapeValue: false
      }
    })
}
