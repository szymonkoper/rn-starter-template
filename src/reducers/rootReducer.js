import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from '@react-native-community/async-storage'
import api from './api'
import settings from './settings'

const persistenceConfig = {
  key: 'rootReducer',
  timeout: null,
  storage,
  version: 1,
  whitelist: ['settings']
}

export default persistReducer(
  persistenceConfig,
  combineReducers({
    api,
    settings
  })
)
