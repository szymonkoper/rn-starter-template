import React from 'react'
import * as ScreenNames from 'navigation/screenNames'
import HeaderButton from 'style/components/HeaderButton'
import { EmptyStateIndicator, ScreenContainer } from './ComicsScreen.styled'

const ComicsScreen = () => (
  <ScreenContainer>
    <EmptyStateIndicator />
  </ScreenContainer>
)

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
