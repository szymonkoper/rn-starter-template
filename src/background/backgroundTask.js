import { actions, messages } from 'notifications'

export default function backgroundTask() {
  const notification = messages.createExampleNotification()
  actions.showNotification(notification)
}
