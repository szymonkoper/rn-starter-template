import { createAppContainer } from 'react-navigation'
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator'

import screens, { initialRouteName } from './screens'

const options = {
  initialRouteName,
  defaultNavigationOptions: {
    title: 'xkcd'
  }
}

const Navigator = createNativeStackNavigator(screens, options)
const NavigationContainer = createAppContainer(Navigator)

export { initialRouteName }

export default NavigationContainer
