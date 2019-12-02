import _ from 'lodash'
import * as TYPES from './types'

const INITIAL_STATE = {
  loading: false,
  error: null,
  latestComicNum: null,
  oldestComicNum: null,
  nums: [],
  comicsByNum: {},
  hasNext: true
}

export default (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action

  switch (type) {
    case TYPES.COMICS_PAGE_GET_RESET:
      return INITIAL_STATE

    case TYPES.COMICS_PAGE_GET_REQUEST: {
      return { ...state, loading: true, error: null }
    }

    case TYPES.COMICS_PAGE_GET_SUCCESS: {
      const { newComics } = payload
      const { comicsByNum, latestComicNum, nums } = state

      const newNums = newComics.map(({ num }) => num)

      const newComicsByNum = newComics.reduce((acc, comic) => {
        acc[comic.num] = comic
        return acc
      }, {})

      const nextNums = [...new Set([...nums, ...newNums])]

      const nextComicsByNum = { ...comicsByNum, ...newComicsByNum }

      const nextOldestComicNum = _.min(newNums)

      return {
        ...state,
        loading: false,
        error: null,
        latestComicNum: latestComicNum || _.max(nextNums),
        oldestComicNum: nextOldestComicNum,
        nums: nextNums,
        comicsByNum: nextComicsByNum,
        hasNext: nextOldestComicNum > 0
      }
    }

    case TYPES.COMICS_PAGE_GET_FAILURE: {
      const { error } = payload
      return { ...state, loading: false, error }
    }

    default:
      return state
  }
}
