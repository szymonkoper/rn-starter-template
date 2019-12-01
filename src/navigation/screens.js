import ComicsScreen from 'screens/ComicsScreen'
import SettingsScreen from 'screens/SettingsScreen'

import * as Names from './screenNames'

export const initialRouteName = Names.Comics

export default {
  [Names.Comics]: ComicsScreen,
  [Names.Settings]: SettingsScreen
}
