import { Reducer } from 'redux-testkit'
import settingsReducer from '../reducer'
import * as TYPES from '../types'

describe('settings reducer', () => {
  it('has initial state', () => {
    expect(settingsReducer()).toEqual({ language: null })
  })

  it('stays the same for irrelevant action', () => {
    const state = { language: 'ru' }
    const action = {
      type: 'thisreducerhesnosuchaction',
      payload: { something: 123 }
    }

    Reducer(settingsReducer)
      .withState(state)
      .expect(action)
      .toReturnState(state)
  })

  it('stays the same for the same updated language', () => {
    const action = {
      type: TYPES.UPDATE_LANGUAGE,
      payload: { language: 'ru' }
    }
    const state = { language: 'ru' }

    Reducer(settingsReducer)
      .withState(state)
      .expect(action)
      .toReturnState(state)
  })

  it('updates language', () => {
    const action = { type: TYPES.UPDATE_LANGUAGE, payload: { language: 'ru' } }
    const result = { language: 'ru' }

    Reducer(settingsReducer)
      .expect(action)
      .toReturnState(result)

    Reducer(settingsReducer)
      .withState({ language: 'pl' })
      .expect(action)
      .toReturnState(result)
  })
})
