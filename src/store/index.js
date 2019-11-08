import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default (() => {
  let storeWithMiddleware = null

  storeWithMiddleware = applyMiddleware(reduxThunk, createLogger())(
    createStore
  )(rootReducer)

  return storeWithMiddleware
})()
