import React from 'react'
import PropTypes from 'prop-types'
import { i18nPropTypes } from 'i18n'
import { ScreenContainer, ScrollView } from './DevScreen.styled'

// TODO: Move it to sections/index
import BuildInfoSection from './sections/BuildInfoSection'
import LocalizationSection from './sections/LocalizationSection'
import EnvSection from './sections/EnvSection'
import APISection from './sections/APISection'
import NotificationsSection from './sections/NotificationsSection'
import LottieSection from './sections/LottieSection'

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
