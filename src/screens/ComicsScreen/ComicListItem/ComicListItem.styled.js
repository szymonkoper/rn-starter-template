import styled from 'styled-components/native'
import { backgroundColorPrimary } from 'style/colors'
import { itemBorderRadius, itemPadding } from 'style/dimensions'
import LoadingIndicator from 'style/components/LoadingIndicator'
import Text from 'style/components/Text'

export const TouchableContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${backgroundColorPrimary};
  border-radius: ${itemBorderRadius}px;
  flex-direction: row;
  height: 100px;
  margin-horizontal: ${itemPadding}px;
  padding: ${itemPadding}px;
`

export const Title = styled(Text).attrs(() => ({
  ellipsizeMode: 'tail',
  numberOfLines: 2
}))`
  text-align: center;
  padding: 4px;
  margin-left: ${itemPadding}px;
  flex: 1;
`

export const Thumbnail = styled.Image.attrs(() => ({ resizeMode: 'contain' }))`
  height: 100%;
  width: 100%;
`

export const ThumbnailWrapper = styled.View`
  flex-direction: column;
  width: 30%;
`

export const ThumbnailLoadingIndicator = styled(LoadingIndicator)`
  height: 100%;
  position: absolute;
  width: 100%;
`

export const Separator = styled.View`
  height: ${itemPadding}px;
`
