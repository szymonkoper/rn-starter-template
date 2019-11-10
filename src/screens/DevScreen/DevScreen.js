import React from 'react'
import VersionNumber from 'react-native-version-number'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { i18nConstants, i18nPropTypes } from '../../i18n'

import {
  LanguageOptionsWrapper,
  LanguageText,
  ScreenContainer,
  ScrollView,
  Section,
  SectionContentText,
  SectionHeaderText,
  ValueLongText,
  ValueShortText
} from './DevScreen.styled'

const DevScreen = ({ language, updateLanguage }) => {
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

        <Section>
          <SectionHeaderText>{t('Dev.LanguageTitle')}</SectionHeaderText>
          <LanguageOptionsWrapper>
            {i18nConstants.LOCALES_CODES.map(languageCode => (
              <LanguageText
                key={languageCode}
                isCurrent={language === languageCode}
                onPress={() => {
                  if (language !== languageCode) updateLanguage(languageCode)
                }}
              >
                {languageCode}
              </LanguageText>
            ))}
          </LanguageOptionsWrapper>
        </Section>

        <Section>
          <SectionHeaderText>{t('Dev.EnvTitle')}</SectionHeaderText>
          {Object.entries(Config)
            .filter(([_, value]) => typeof value === 'string')
            .map(([key, value]) => (
              <SectionContentText key={key}>
                {`${key}=`} <ValueLongText>{`${value}`}</ValueLongText>
              </SectionContentText>
            ))}
        </Section>
      </ScrollView>
    </ScreenContainer>
  )
}

DevScreen.propTypes = {
  language: i18nPropTypes.languagesShape.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

export default DevScreen
