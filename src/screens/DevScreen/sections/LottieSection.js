import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { Section, SectionHeaderText } from '../DevScreen.styled'

const LottieViewWrapper = styled.View`
  align-items: center;
`

const StyledLottieView = styled(LottieView).attrs(() => ({
  autoPlay: true,
  loop: true
}))`
  width: 30%;
`

const LottieSection = () => {
  const { t } = useTranslation()
  return (
    <Section>
      <SectionHeaderText>{t('Dev.LottieTitle')}</SectionHeaderText>
      <LottieViewWrapper>
        <StyledLottieView key="empty" source={require('lottie/empty.json')} />
        <StyledLottieView
          key="success"
          source={require('lottie/success.json')}
        />
        <StyledLottieView
          key="failure"
          source={require('lottie/failure.json')}
        />
        <StyledLottieView
          key="loading"
          source={require('lottie/loading.json')}
        />
      </LottieViewWrapper>
    </Section>
  )
}

export default LottieSection
