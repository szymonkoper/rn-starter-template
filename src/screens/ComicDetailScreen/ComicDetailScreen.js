import React from 'react'
import PropTypes from 'prop-types'
import { ComicImage, ScreenContainer } from './ComicDetailScreen.styled'

const ComicDetailScreen = ({ imgSource }) => (
  <ScreenContainer>
    <ComicImage source={{ uri: imgSource }} />
  </ScreenContainer>
)

ComicDetailScreen.propTypes = {
  imgSource: PropTypes.string.isRequired
}

export default ComicDetailScreen
