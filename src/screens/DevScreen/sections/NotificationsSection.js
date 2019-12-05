import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { actions, messages } from 'notifications'
import {
  DevButton,
  DevButtonText,
  Section,
  SectionContentText,
  SectionHeaderText
} from '../DevScreen.styled'

const NotificationsSection = () => {
  const { t } = useTranslation()

  const [notificationsPermission, setNotificationsPermission] = useState(null)

  const refreshNotificationsPermission = () => {
    actions.hasPermission().then(setNotificationsPermission)
  }

  useEffect(() => {
    refreshNotificationsPermission()
  }, [])

  return (
    <Section>
      <SectionHeaderText>{t('Dev.Notifications')}</SectionHeaderText>

      <Section>
        <SectionContentText>{t('Dev.PermissionsAsk')}</SectionContentText>
        <DevButton
          onPress={() => {
            actions
              .requestPermission()
              .then(refreshNotificationsPermission)
              .catch(() => {
                actions.showPermissionAlert(t)
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
            actions.showNotification(messages.createExampleNotification())
          }}
        >
          <DevButtonText>{t('Dev.Call')}</DevButtonText>
        </DevButton>
      </Section>
    </Section>
  )
}

export default NotificationsSection
