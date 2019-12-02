import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import * as ScreenNames from 'navigation/screenNames'
import navigationShape from 'navigation/proptypes'
import { comicsShape } from 'reducers/api/xkcdRest/proptypes'
import HeaderButton from 'style/components/HeaderButton'
import LoadingIndicator from 'style/components/LoadingIndicator'
import {
  CenterFullAbsolute,
  ComicsFlatList,
  EmptyStateIndicator,
  EmptyStateText,
  FloatingErrorContainer,
  FloatingErrorText,
  ScreenContainer
} from './ComicsScreen.styled'
import ComicListItem, { ComicListItemSeparator } from './ComicListItem'

const TOAST_DURATION = 3000

const ANIMATION_SHOW = {
  useNativeDriver: true,
  duration: 300,
  toValue: 1
}

const ANIMATION_HIDE = { ...ANIMATION_SHOW, toValue: 0 }

const ComicsScreen = ({
  comics,
  hasNext,
  error,
  getNextComics,
  loading,
  navigation,
  resetComics
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    getNextComics()
  }, [])

  const [toastShowAnimation] = useState(new Animated.Value(0))
  const [toastHideTimeout, setToastHideTimeout] = useState(null)

  useEffect(() => {
    if (error) {
      clearTimeout(toastHideTimeout)

      Animated.timing(toastShowAnimation, ANIMATION_SHOW).start()

      setToastHideTimeout(
        setTimeout(() => {
          Animated.timing(toastShowAnimation, ANIMATION_HIDE).start()
        }, TOAST_DURATION)
      )
    }
  }, [error])

  const onComicPress = pressedNum => {
    const { img } = comics.find(({ num }) => num === pressedNum)

    navigation.navigate(ScreenNames.ComicDetail, { imgSource: img })
  }

  return (
    <ScreenContainer>
      <ComicsFlatList
        data={comics}
        renderItem={({ item: { img, num, title } }) => (
          <ComicListItem
            imgSource={img}
            onPress={() => onComicPress(num)}
            title={title}
          />
        )}
        keyExtractor={({ num }) => num.toString()}
        onEndReached={() => {
          if (hasNext) getNextComics()
        }}
        onEndReachedThreshold={0.5}
        onRefresh={async () => {
          await resetComics()
          getNextComics()
        }}
        refreshing={false}
        ItemSeparatorComponent={ComicListItemSeparator}
      />

      {comics.length === 0 && (
        <CenterFullAbsolute>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <>
              <EmptyStateIndicator />
              <EmptyStateText>
                {error ? t('Error.NoNetwork') : t('Comics.EmptyStateMessage')}
              </EmptyStateText>
            </>
          )}
        </CenterFullAbsolute>
      )}

      <FloatingErrorContainer
        style={{
          transform: [
            {
              translateY: toastShowAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [40, 0]
              })
            },
            {
              scale: toastShowAnimation.interpolate({
                inputRange: [0.4, 0.9, 1],
                outputRange: [1, 1.5, 1],
                extrapolate: 'clamp'
              })
            }
          ]
        }}
      >
        <FloatingErrorText>{t('Error.NoNetwork')}</FloatingErrorText>
      </FloatingErrorContainer>
    </ScreenContainer>
  )
}

ComicsScreen.propTypes = {
  error: PropTypes.shape({ code: PropTypes.number }),
  comics: comicsShape.isRequired,
  loading: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  getNextComics: PropTypes.func.isRequired,
  resetComics: PropTypes.func.isRequired,
  navigation: navigationShape.isRequired
}

ComicsScreen.defaultProps = {
  error: null
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
