import _ from 'lodash'
import store, { persistor } from './store'
import withRedux from './hocs/withRedux'
import withLanguageRefresher from './hocs/withLanguageRefresher'
import withPersistGate from './hocs/withPersistGate'
import initialize from './initialize'
import NavigationContainer from './navigation'

initialize(store)

export default _.flowRight(
  withRedux(store),
  withPersistGate(persistor),
  withLanguageRefresher()
)(NavigationContainer)
