import React from 'react'
import * as ScreenNames from 'navigation/screenNames'
import HeaderButton from 'style/components/HeaderButton'
import { EmptyStateIndicator, ScreenContainer } from './ComicsScreen.styled'

const DevScreen = () => (
  <ScreenContainer>
    <EmptyStateIndicator />
  </ScreenContainer>
)

DevScreen.navigationOptions = ({ navigation, screenProps: { t } }) => ({
  title: t('Comics.HeaderTitle'),
  headerRight: () => (
    <HeaderButton
      onPress={() => navigation.navigate(ScreenNames.Dev)}
      title={t('Dev.HeaderTitle')}
    />
  )
})

export default DevScreen
