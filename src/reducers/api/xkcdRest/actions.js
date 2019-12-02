import xkcdRestClient, { paths } from 'api/rest'
import * as TYPES from './types'
import {
  selectLatestComic,
  selectOldestComicNum,
  selectRoot
} from './selectors'

const createActionRequest = () => ({ type: TYPES.COMICS_PAGE_GET_REQUEST })

const createActionSuccess = newComics => ({
  type: TYPES.COMICS_PAGE_GET_SUCCESS,
  payload: { newComics }
})

const createActionFailure = error => ({
  type: TYPES.COMICS_PAGE_GET_FAILURE,
  payload: { error }
})

export const resetComics = () => ({
  type: TYPES.COMICS_PAGE_GET_RESET
})

export const getNextComics = (count = 10) => async (dispatch, getState) => {
  try {
    dispatch(createActionRequest())

    const xkcdRestState = selectRoot(getState())

    const latestComicInStore = selectLatestComic(xkcdRestState)

    const latestComic =
      latestComicInStore || (await xkcdRestClient.get(paths.latestComic())).data

    const oldestComicNum =
      selectOldestComicNum(xkcdRestState) || latestComic.num

    if (oldestComicNum === 0) {
      createActionSuccess()
    }

    const newNums = [...Array(count).keys()]
      .map(n => oldestComicNum - 1 - n)
      .filter(n => n >= 0)

    const newComics = (
      await Promise.all(
        newNums.map(num => xkcdRestClient.get(paths.comicId(num)))
      )
    ).map(({ data }) => data)

    const newComicsWithOptionalLatest = [
      !latestComicInStore ? latestComic : null,
      ...newComics
    ].filter(it => it)

    dispatch(createActionSuccess(newComicsWithOptionalLatest))
  } catch (error) {
    dispatch(createActionFailure(error))
  }
}
