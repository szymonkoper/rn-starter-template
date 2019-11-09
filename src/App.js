import _ from 'lodash'
import store from './store'
import withRedux from './hocs/withRedux'
import withLanguageRefresher from './hocs/withLanguageRefresher'
import initialize from './initialize'
import NavigationContainer from './navigation'

initialize(store)

// TODO: Add persisistence
export default _.flowRight(
  withRedux(store),
  withLanguageRefresher()
)(NavigationContainer)
