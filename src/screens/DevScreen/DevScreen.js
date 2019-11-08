import React from 'react'
import VersionNumber from 'react-native-version-number'
import { Trans, useTranslation } from 'react-i18next'

import {
  ScreenContainer,
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
      <Section>
        <SectionHeaderText>{t('Dev.VersionTitle')}</SectionHeaderText>
        <SectionContentText>
          <Trans
            i18nKey="Dev.VersionNumbers"
            values={{
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
    </ScreenContainer>
  )
}

export default DevScreen
