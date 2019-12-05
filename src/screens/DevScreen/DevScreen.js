import React from 'react'
import PropTypes from 'prop-types'
import { i18nPropTypes } from 'i18n'
import { ScreenContainer, ScrollView } from './DevScreen.styled'
import {
  APISection,
  BuildInfoSection,
  EnvSection,
  LocalizationSection,
  LottieSection,
  NotificationsSection
} from './sections'

const DevScreen = ({ language, updateLanguage }) => (
  <ScreenContainer>
    <ScrollView>
      <BuildInfoSection />
      <LocalizationSection
        language={language}
        updateLanguage={updateLanguage}
      />

      {__DEV__ && (
        <>
          <EnvSection />
          <APISection />
          <NotificationsSection />
          <LottieSection />
        </>
      )}
    </ScrollView>
  </ScreenContainer>
)

DevScreen.propTypes = {
  language: i18nPropTypes.languagesShape.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

export default DevScreen
