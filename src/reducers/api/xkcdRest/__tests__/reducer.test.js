import { Reducer } from 'redux-testkit'
import xkcdRestReducer from '../reducer'
import * as TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  error: null,
  latestComicNum: null,
  oldestComicNum: null,
  nums: [],
  comicsByNum: {},
  hasNext: true
}

describe('xkcdRest reducer', () => {
  let state

  beforeEach(() => {
    state = INITIAL_STATE
  })

  it('has initial state', () => {
    expect(xkcdRestReducer()).toEqual(state)
  })

  it('stays the same for irrelevant action', () => {
    const action = {
      type: 'thisreducerhesnosuchaction',
      payload: { something: 123 }
    }

    Reducer(xkcdRestReducer)
      .withState(state)
      .expect(action)
      .toReturnState(state)
  })

  it('updates with request action', () => {
    const action = { type: TYPES.COMICS_PAGE_GET_REQUEST }

    Reducer(xkcdRestReducer)
      .withState({ ...INITIAL_STATE, nums: [1, 2] })
      .expect(action)
      .toReturnState({
        ...INITIAL_STATE,
        loading: true,
        error: null,
        nums: [1, 2]
      })

    Reducer(xkcdRestReducer)
      .withState({ ...INITIAL_STATE, error: 'has error' })
      .expect(action)
      .toReturnState({ ...INITIAL_STATE, loading: true, error: null })
  })

  it('updates with success action', () => {
    const comic1 = { num: 1, title: 'Comic 1' }
    const comic2 = { num: 2, title: 'Comic 2' }
    const comic3 = { num: 3, title: 'Comic 3' }

    const loadingState = { ...INITIAL_STATE, loading: true }
    const action1 = {
      type: TYPES.COMICS_PAGE_GET_SUCCESS,
      payload: { newComics: [comic2, comic3] }
    }

    const part1Result = {
      ...INITIAL_STATE,
      loading: false,
      error: null,
      nums: [2, 3],
      comicsByNum: {
        2: comic2,
        3: comic3
      },
      latestComicNum: 3,
      oldestComicNum: 2
    }

    Reducer(xkcdRestReducer)
      .withState(loadingState)
      .expect(action1)
      .toReturnState(part1Result)

    const action2 = {
      type: TYPES.COMICS_PAGE_GET_SUCCESS,
      payload: { newComics: [comic1] }
    }

    Reducer(xkcdRestReducer)
      .withState({ ...part1Result, loading: true })
      .expect(action2)
      .toReturnState({
        ...part1Result,
        nums: [1, 2, 3],
        comicsByNum: {
          1: comic1,
          2: comic2,
          3: comic3
        },
        latestComicNum: 3,
        oldestComicNum: 1
      })
  })

  it('updates with failure action', () => {
    const comicsByNum = {
      1: { num: 1, title: '111' },
      2: { num: 2, title: '2222' },
      3: { num: 3, title: '33' }
    }

    const nums = Object.keys(comicsByNum)

    const beforeFailState = {
      ...INITIAL_STATE,
      comicsByNum,
      nums,
      loading: true
    }

    const error = { message: 'some error message' }

    const action = { type: TYPES.COMICS_PAGE_GET_FAILURE, payload: { error } }

    Reducer(xkcdRestReducer)
      .withState(beforeFailState)
      .expect(action)
      .toReturnState({
        ...beforeFailState,
        loading: false,
        error
      })
  })
})
