import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Separator,
  Thumbnail,
  ThumbnailLoadingIndicator,
  ThumbnailWrapper,
  Title,
  TouchableContainer
} from './ComicListItem.styled'

const ComicListItem = ({ imgSource, title, onPress }) => {
  const [loadingImage, setLoadingImage] = useState(true)

  return (
    <TouchableContainer onPress={onPress}>
      <ThumbnailWrapper>
        <Thumbnail
          source={{ uri: imgSource }}
          onLoadStart={() => setLoadingImage(true)}
          onLoadEnd={() => setLoadingImage(false)}
        />
        {loadingImage && <ThumbnailLoadingIndicator />}
      </ThumbnailWrapper>

      <Title>{title}</Title>
    </TouchableContainer>
  )
}

ComicListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ComicListItem

export const ComicListItemSeparator = Separator
