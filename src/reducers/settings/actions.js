import i18next from 'i18next'
import * as TYPES from './types'
import { languageSelector } from './selectors'

// eslint-disable-next-line import/prefer-default-export
export const updateLanguage = language => (dispatch, getState) => {
  const currentLanguage = languageSelector(getState().settings)
  if (currentLanguage === language) return

  i18next.changeLanguage(language)
  dispatch({
    type: TYPES.UPDATE_LANGUAGE,
    payload: { language }
  })
}
