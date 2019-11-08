import styled from 'styled-components/native'
import Text from '../../style/components/Text'
import { fontSizeL, fontSizeS, screenMargin } from '../../style/dimensions'
import {
  backgroundColorPrimary,
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
`

export const ValueShortText = styled(Text)`
  color: ${textColorTertiary};
  font-weight: bold;
`

export const ValueLongText = styled(ValueShortText)`
  font-size: ${fontSizeS};
`
