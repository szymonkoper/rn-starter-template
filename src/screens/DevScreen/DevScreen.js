import React from 'react'
import VersionNumber from 'react-native-version-number'
import { Trans, useTranslation } from 'react-i18next'

import {
  ScreenContainer,
  ScrollView,
  Section,
  SectionContentText,
  SectionHeaderText,
  ValueLongText,
  ValueShortText
} from './DevScreen.styled'

const DevScreen = () => {
  const { t } = useTranslation()

  return (
    <ScreenContainer>
      <ScrollView>
        <Section>
          <SectionHeaderText>{t('Dev.VersionTitle')}</SectionHeaderText>
          <SectionContentText>
            <Trans
              i18nKey="Dev.VersionNumbers"
              values={{
                buildMode: __DEV__ ? 'development' : 'release',
                appVersion: VersionNumber.appVersion,
                buildVersion: VersionNumber.buildVersion,
                bundleIdentifier: VersionNumber.bundleIdentifier
              }}
            >
              <ValueShortText />
              <ValueLongText />
            </Trans>
          </SectionContentText>
        </Section>
      </ScrollView>
    </ScreenContainer>
  )
}

export default DevScreen
