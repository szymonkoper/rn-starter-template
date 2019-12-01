import * as TYPES from './types'

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: false
}

export default function(state = INITIAL_STATE, action = {}) {
  const { type, payload } = action
  switch (type) {
    case TYPES.LATEST_COMIC_GET_REQUEST:
      return { ...INITIAL_STATE, loading: true }
    case TYPES.LATEST_COMIC_GET_SUCCESS:
      return { ...INITIAL_STATE, data: payload.latestComicMetadata }
    case TYPES.LATEST_COMIC_GET_FAILURE:
      return { ...INITIAL_STATE, error: payload.error }
    default:
      return state
  }
}
