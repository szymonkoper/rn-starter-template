import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'

const store = (() => {
  let storeWithMiddleware = null

  storeWithMiddleware = applyMiddleware(reduxThunk, createLogger())(
    createStore
  )(rootReducer)

  return storeWithMiddleware
})()

export default store

export const persistor = persistStore(store)
