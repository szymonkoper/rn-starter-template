import i18next from 'i18next'
import * as TYPES from './types'

// eslint-disable-next-line import/prefer-default-export
export const updateLanguage = language => {
  i18next.changeLanguage(language)

  return {
    type: TYPES.UPDATE_LANGUAGE,
    payload: { language }
  }
}
