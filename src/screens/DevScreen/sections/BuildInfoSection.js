import React from 'react'
import VersionNumber from 'react-native-version-number'
import { Trans, useTranslation } from 'react-i18next'
import {
  Section,
  SectionContentText,
  SectionHeaderText,
  ValueLongText,
  ValueShortText
} from '../DevScreen.styled'

const BuildInfoSection = () => {
  const { t } = useTranslation()
  return (
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
  )
}

export default BuildInfoSection
