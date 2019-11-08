import DevScreen from '../screens/DevScreen'
import ReactNativeIntroScreen from '../screens/ReactNativeIntroScreen'

import * as Names from './screenNames'

export const initialRouteName = Names.ReactNativeIntro

export default {
  [Names.Dev]: DevScreen,
  [Names.ReactNativeIntro]: ReactNativeIntroScreen
}
