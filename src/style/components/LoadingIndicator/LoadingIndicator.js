import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import loadingAnimationSource from 'lottie/loading.json'

export default styled(LottieView).attrs(() => ({
  autoPlay: true,
  loop: true,
  source: loadingAnimationSource
}))``
