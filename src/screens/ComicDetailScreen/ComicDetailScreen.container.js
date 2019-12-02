import React from 'react'
import navigationShape from 'navigation/proptypes'
import ComicDetailScreen from './ComicDetailScreen'

const ComicDetailScreenContainer = props => {
  const { navigation } = props
  const imgSource = navigation.getParam('imgSource', null)

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ComicDetailScreen imgSource={imgSource} {...props} />
}

ComicDetailScreenContainer.propTypes = {
  navigation: navigationShape.isRequired
}

export default ComicDetailScreenContainer
