import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'

export default (persistor, onBeforeLift = null) => Component => props => (
  <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
    <Component {...props} />
  </PersistGate>
)
