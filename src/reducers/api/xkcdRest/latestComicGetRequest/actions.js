import * as TYPES from './types'

const createActionGetLatestComicRequest = () => ({
  type: TYPES.LATEST_COMIC_GET_REQUEST
})

const createActionGetLatestComicSuccess = () => ({
  type: TYPES.LATEST_COMIC_GET_SUCCESS
})

// eslint-disable-next-line import/prefer-default-export
export const getLatestComic = () => async dispatch => {
  dispatch(createActionGetLatestComicRequest())

  setTimeout(() => {
    const data = { id: 123 }
    dispatch(createActionGetLatestComicSuccess(data))
  }, 500)
}
