import firebase from 'react-native-firebase'

export const { Importance: importance } = firebase.notifications.Android

export const NOTIFICATION_DEFAULT_CHANNEL_ID = 'rn-st-default-channel'

export const defaultChannelDetails = {
  id: NOTIFICATION_DEFAULT_CHANNEL_ID,
  name: 'Default notifications',
  importance: importance.Urgent,
  description: 'This is the default channel of the app'
}
