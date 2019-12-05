import firebase from 'react-native-firebase'
import { Alert } from 'react-native'
import NotificationSettings from 'react-native-open-notification'

export function openSettings() {
  NotificationSettings.open()
}

export function showPermissionAlert(t) {
  const TRANSLATION_PATH = 'Settings.Notifications.AlertNoPermission'

  Alert.alert(
    t(`${TRANSLATION_PATH}.Title`),
    t(`${TRANSLATION_PATH}.Message`),
    [
      { text: t('Common.Cancel'), style: 'cancel' },
      {
        text: t(`${TRANSLATION_PATH}.OpenSettings`),
        onPress: openSettings
      }
    ]
  )
}

export function hasPermission() {
  return firebase.messaging().hasPermission()
}

export function requestPermission() {
  return firebase.messaging().requestPermission()
}

export function showNotification(notificationData) {
  const {
    body,
    channelId,
    data,
    notificationId,
    subtitle,
    title
  } = notificationData

  const notification = new firebase.notifications.Notification({
    sound: 'default',
    show_in_foreground: true
  })
    .setBody(body)
    .setData(data)
    .setNotificationId(notificationId)
    .setSubtitle(subtitle)
    .setTitle(title)
    .android.setChannelId(channelId)
    .android.setPriority(firebase.notifications.Android.Priority.Default)

  firebase.notifications().displayNotification(notification)
}
