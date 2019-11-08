import * as TYPES from './types'

// eslint-disable-next-line import/prefer-default-export
export const updateLanguage = language => ({
  type: TYPES.UPDATE_LANGUAGE,
  payload: { language }
})
