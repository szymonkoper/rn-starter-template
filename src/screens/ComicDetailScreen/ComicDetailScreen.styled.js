import styled from 'styled-components/native'
import { backgroundColorPrimary } from 'style/colors'

export const ScreenContainer = styled.SafeAreaView`
  background-color: ${backgroundColorPrimary};
  flex: 1;
`

export const ComicImage = styled.Image.attrs(() => ({ resizeMode: 'contain' }))`
  flex: 1;
`
