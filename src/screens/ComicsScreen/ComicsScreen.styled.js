import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { Animated } from 'react-native'
import { backgroundColorSecondary, negativeColor, white } from 'style/colors'
import { fontSizeS, itemPadding } from 'style/dimensions'
import Text from 'style/components/Text'

export const ScreenContainer = styled.SafeAreaView`
  background-color: ${backgroundColorSecondary};
  flex: 1;
`

export const ComicsFlatList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingVertical: itemPadding
  }
}))`
  flex: 1;
`

export const EmptyStateIndicator = styled(LottieView).attrs(() => ({
  autoPlay: true,
  loop: true,
  source: require('lottie/empty.json')
}))`
  width: 200px;
  height: 200px;
`

export const CenterFullAbsolute = styled.View.attrs(() => ({
  pointerEvents: 'none'
}))`
  align-items: center;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`

export const EmptyStateText = styled(Text)`
  font-size: ${fontSizeS};
`

export const FloatingErrorContainer = styled(Animated.View)`
  align-items: center;
  background-color: ${negativeColor};
  border-radius: ${itemPadding}px;
  bottom: 0px;
  elevation: 1;
  height: 40px;
  justify-content: center;
  position: absolute;
  width: 100%;
`

export const FloatingErrorText = styled(Text).attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
}))`
  color: ${white};
  font-size: ${fontSizeS};
`
