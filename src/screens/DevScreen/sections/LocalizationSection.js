import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { i18nConstants, i18nPropTypes } from 'i18n'
import Text from 'style/components/Text'
import { fontSizeL } from 'style/dimensions'
import {
  backgroundColorSecondary,
  positiveColor,
  textColorTertiary
} from 'style/colors'
import { Section, SectionHeaderText } from '../DevScreen.styled'

const LanguageOptionsWrapper = styled.View`
  margin: 16px;
`

const LanguageText = styled(Text)`
  background-color: ${({ isCurrent }) =>
    isCurrent ? positiveColor : backgroundColorSecondary};
  color: ${textColorTertiary};
  flex: 1;
  font-size: ${fontSizeL};
  font-weight: ${({ isCurrent }) => (isCurrent ? 'bold' : 'normal')};
  margin-horizontal: 16px;
  margin-vertical: 4px;
  text-align: center;
`

const LocalizationSection = ({ language, updateLanguage }) => {
  const { t } = useTranslation()
  return (
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
  )
}

LocalizationSection.propTypes = {
  language: i18nPropTypes.languagesShape.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

export default LocalizationSection
