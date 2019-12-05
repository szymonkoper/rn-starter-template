import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as notifications from 'notifications'
import {
  DevButton,
  DevButtonText,
  Section,
  SectionContentText,
  SectionHeaderText
} from '../DevScreen.styled'

const NOTIFICATIONS_TESTING_CHANNEL_ID = 'rn-st-testing-channel'

const testingChannelDetails = {
  id: NOTIFICATIONS_TESTING_CHANNEL_ID,
  name: 'Testing channel',
  importance: notifications.Importance.Urgent,
  description: 'Channel only for testing notifications'
}

const NotificationsSection = () => {
  const { t } = useTranslation()

  const [notificationsPermission, setNotificationsPermission] = useState(null)

  const refreshNotificationsPermission = () => {
    notifications.hasPermission().then(setNotificationsPermission)
  }

  useEffect(() => {
    refreshNotificationsPermission()
  }, [])

  useEffect(() => {
    notifications.createChannel(testingChannelDetails)
  }, [])

  return (
    <Section>
      <SectionHeaderText>{t('Dev.Notifications')}</SectionHeaderText>

      <Section>
        <SectionContentText>{t('Dev.PermissionsAsk')}</SectionContentText>
        <DevButton
          onPress={() => {
            notifications
              .requestPermission()
              .then(refreshNotificationsPermission)
              .catch(() => {
                notifications.showPermissionAlert(t)
              })
          }}
        >
          <DevButtonText>{t('Dev.Call')}</DevButtonText>
        </DevButton>
      </Section>

      <Section>
        <SectionContentText>{t('Dev.PermissionsShow')}</SectionContentText>
        <SectionContentText>
          {notificationsPermission === null ||
          notificationsPermission === undefined
            ? '???'
            : notificationsPermission.toString()}
        </SectionContentText>
        <DevButton onPress={refreshNotificationsPermission}>
          <DevButtonText>{t('Dev.Refresh')}</DevButtonText>
        </DevButton>
      </Section>

      <Section>
        <SectionContentText>{t('Dev.ShowNotification')}</SectionContentText>
        <DevButton
          onPress={() => {
            notifications.showNotification({
              channelId: NOTIFICATIONS_TESTING_CHANNEL_ID,
              notificationId: '1',
              body: 'This is a body of example notification',
              subtitle: 'This is a subtitle',
              title: 'Title Here'
            })
          }}
        >
          <DevButtonText>{t('Dev.Call')}</DevButtonText>
        </DevButton>
      </Section>
    </Section>
  )
}

export default NotificationsSection
