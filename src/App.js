import _ from 'lodash'
import store, { persistor } from 'store'
import NavigationContainer from 'navigation'
import backgroundTask from 'background'
import withBackgroundRunner from './hocs/withBackgroundRunner'
import withRedux from './hocs/withRedux'
import withPersistGate from './hocs/withPersistGate'
import withNotifications from './hocs/withNotifications'
import withApolloGraphQlProvider from './hocs/withApolloGraphQlProvider'
import initialize, { i18nextInitialize } from './initialize'

initialize()

export default _.flowRight(
  withRedux(store),
  withPersistGate(persistor, () => i18nextInitialize(store)),
  withNotifications(),
  withBackgroundRunner(backgroundTask), // <-- This shows notification from background every 15+ minutes
  withApolloGraphQlProvider
)(NavigationContainer)
