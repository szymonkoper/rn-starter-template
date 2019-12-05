import React from 'react'
import Config from 'react-native-config'
import { useTranslation } from 'react-i18next'
import {
  Section,
  SectionContentText,
  SectionHeaderText,
  ValueLongText
} from '../DevScreen.styled'

export default () => {
  const { t } = useTranslation()
  return (
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
  )
}
