import { enableScreens } from 'react-native-screens'
import i18nextInitialize from './i18n'

export default function initialize(store) {
  enableScreens()
  i18nextInitialize(store)
}
