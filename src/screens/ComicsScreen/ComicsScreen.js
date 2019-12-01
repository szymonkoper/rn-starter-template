import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as ScreenNames from 'navigation/screenNames'
import HeaderButton from 'style/components/HeaderButton'
import { EmptyStateIndicator, ScreenContainer } from './ComicsScreen.styled'

const ComicsScreen = ({ getLatestComic, latestComicGetRequest }) => {
  useEffect(() => {
    getLatestComic()
  }, [])

  return (
    <ScreenContainer>
      <EmptyStateIndicator />
    </ScreenContainer>
  )
}

ComicsScreen.propTypes = {
  getLatestComic: PropTypes.func.isRequired,
  latestComicGetRequest: PropTypes.shape({}).isRequired // TODO: make it more specific
}

ComicsScreen.navigationOptions = ({ navigation, screenProps: { t } }) => ({
  title: t('Comics.HeaderTitle'),
  headerRight: () => (
    <HeaderButton
      onPress={() => navigation.navigate(ScreenNames.Settings)}
      title={t('Settings.HeaderTitle')}
    />
  )
})

export default ComicsScreen
