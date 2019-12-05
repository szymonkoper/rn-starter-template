import { NOTIFICATION_DEFAULT_CHANNEL_ID } from './constants'

// eslint-disable-next-line import/prefer-default-export
export const createExampleNotification = () => ({
  channelId: NOTIFICATION_DEFAULT_CHANNEL_ID,
  notificationId: '1',
  body: 'This is a body of example notification',
  subtitle: 'This is a subtitle',
  title: 'Title Here'
})
