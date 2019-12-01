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
      return { data: null, error: null, loading: true }
    case TYPES.LATEST_COMIC_GET_SUCCESS:
      return { data: null, error: null, loading: true }
    case TYPES.LATEST_COMIC_GET_FAILURE:
      return { data: null, error: null, loading: true }
    default:
      return state
  }
}
