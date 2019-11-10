import _ from 'lodash'
import store, { persistor } from './store'
import withRedux from './hocs/withRedux'
import withPersistGate from './hocs/withPersistGate'
import withApolloGraphQlProvider from './hocs/withApolloGraphQlProvider'
import initialize, { i18nextInitialize } from './initialize'
import NavigationContainer from './navigation'

initialize()

export default _.flowRight(
  withRedux(store),
  withPersistGate(persistor, () => i18nextInitialize(store)),
  withApolloGraphQlProvider
)(NavigationContainer)
