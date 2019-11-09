import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'

export default persistor => Component => props => (
  <PersistGate loading={null} persistor={persistor}>
    <Component {...props} />
  </PersistGate>
)
