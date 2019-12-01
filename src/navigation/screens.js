import ComicsScreen from 'screens/ComicsScreen'
import DevScreen from 'screens/DevScreen'

import * as Names from './screenNames'

export const initialRouteName = Names.Comics

export default {
  [Names.Comics]: ComicsScreen,
  [Names.Dev]: DevScreen
}
