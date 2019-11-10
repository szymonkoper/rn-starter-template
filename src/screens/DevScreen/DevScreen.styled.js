import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import Text from '../../style/components/Text'
import { fontSizeL, fontSizeS, screenMargin } from '../../style/dimensions'
import {
  backgroundColorPrimary,
  backgroundColorSecondary,
  positiveColor,
  textColorSecondary,
  textColorTertiary
} from '../../style/colors'

export const ScreenContainer = styled.SafeAreaView`
  background-color: ${backgroundColorPrimary};
  flex: 1;
`

export const ScrollView = styled.ScrollView``

export const Section = styled.View`
  border-color: ${textColorSecondary};
  border-width: 1px;
  margin: ${screenMargin}px;
  padding: 8px;
`

export const SectionHeaderText = styled(Text)`
  font-size: ${fontSizeL};
  font-weight: bold;
  margin-bottom: 16px;
`

export const SectionContentText = styled(Text)`
  color: ${textColorSecondary};
  font-size: ${fontSizeS};
`

export const ValueShortText = styled(Text)`
  color: ${textColorTertiary};
  font-weight: bold;
`

export const ValueLongText = styled(ValueShortText)`
  font-size: ${fontSizeS};
`

export const LanguageOptionsWrapper = styled.View`
  margin: 16px;
`

export const LanguageText = styled(Text)`
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

export const LottieViewWrapper = styled.View`
  align-items: center;
`

export const StyledLottieView = styled(LottieView).attrs(() => ({
  autoPlay: true,
  loop: true
}))`
  width: 30%;
`
