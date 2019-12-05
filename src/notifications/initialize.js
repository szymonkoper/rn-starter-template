import firebase from 'react-native-firebase'

export default function initializeChannel({
  id,
  name,
  importance = firebase.notifications.Android.Importance.Default,
  description
}) {
  const channel = new firebase.notifications.Android.Channel(
    id,
    name,
    importance
  ).setDescription(description)

  firebase.notifications().android.createChannel(channel)
}
