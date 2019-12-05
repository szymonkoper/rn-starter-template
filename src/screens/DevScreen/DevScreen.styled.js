import styled from 'styled-components/native'
import Text from 'style/components/Text'
import { fontSizeL, fontSizeS, screenMargin } from 'style/dimensions'
import {
  backgroundColorPrimary,
  backgroundColorTertiary,
  textColorSecondary,
  textColorTertiary,
  white
} from 'style/colors'

export const ScreenContainer = styled.SafeAreaView`
  background-color: ${backgroundColorPrimary};
  flex: 1;
`

export const ScrollView = styled.ScrollView``

export const Section = styled.View`
  border-color: ${textColorTertiary};
  border-radius: 16px;
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

export const DevButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${backgroundColorTertiary};
  border-radius: 16px;
  justify-content: center;
  min-height: 40px;
`

export const DevButtonText = styled(Text)`
  color: ${white};
  font-size: ${fontSizeS};
`
