import xkcdRestClient, { paths } from 'api/rest'
import * as TYPES from './types'

const latestComicMetadataResponseSelector = response => response.data

const createActionGetLatestComicRequest = () => ({
  type: TYPES.LATEST_COMIC_GET_REQUEST
})

const createActionGetLatestComicSuccess = response => ({
  type: TYPES.LATEST_COMIC_GET_SUCCESS,
  payload: {
    latestComicMetadata: latestComicMetadataResponseSelector(response)
  }
})

const createActionGetLatestComicFailure = error => ({
  type: TYPES.LATEST_COMIC_GET_FAILURE,
  payload: { error }
})

// eslint-disable-next-line import/prefer-default-export
export const getLatestComic = () => async dispatch => {
  dispatch(createActionGetLatestComicRequest())

  try {
    const response = await xkcdRestClient.get(paths.latestComic())
    dispatch(createActionGetLatestComicSuccess(response))
  } catch (error) {
    dispatch(createActionGetLatestComicFailure(error))
  }
}
