import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { backgroundColorPrimary } from 'style/colors'

export const ScreenContainer = styled.SafeAreaView`
  background-color: ${backgroundColorPrimary};
  flex: 1;
`

export const EmptyStateIndicator = styled(LottieView).attrs(() => ({
  autoPlay: true,
  loop: true,
  source: require('lottie/empty.json')
}))`
  width: 30%;
`
