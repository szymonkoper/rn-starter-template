import * as TYPES from './types'

const initialState = {
  language: null
}

export default function(state = initialState, action = {}) {
  const { payload, type } = action

  switch (type) {
    case TYPES.UPDATE_LANGUAGE:
      return { ...state, language: payload.language }
    default:
      return state
  }
}
