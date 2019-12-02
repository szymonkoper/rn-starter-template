import React from 'react'
import { ScrollView } from 'react-native'
import { fireEvent, render } from 'react-native-testing-library'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18n/__test__/testInitialize'
import * as ScreenNames from 'navigation/screenNames'
import ComicsScreen from './ComicsScreen'

describe('ComicsScreen', () => {
  let props = null
  let renderedScreen = null

  beforeEach(() => {
    props = {
      comics: [
        { num: 123, title: 'Comic title', img: 'http://example.com/image.jpg' }
      ],
      hasNext: true,
      error: null,
      getNextComics: jest.fn(),
      loading: false,
      resetComics: jest.fn(),
      navigation: {
        getParam: jest.fn(),
        navigate: jest.fn(),
        pop: jest.fn(),
        popToTop: jest.fn(),
        replace: jest.fn()
      }
    }

    renderedScreen = render(
      <I18nextProvider i18n={i18next}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <ComicsScreen {...props} />
      </I18nextProvider>
    )
  })

  it('renders correctly', () => {
    const { toJSON } = renderedScreen
    expect(toJSON()).toMatchSnapshot()
  })

  it('fetches data on start', () => {
    expect(props.getNextComics).toHaveBeenCalled()
  })

  it('navigates to ComicDetail on comic item press', () => {
    const { getByText } = renderedScreen

    const { title, img } = props.comics[0]

    fireEvent.press(getByText(title))

    expect(props.navigation.navigate).toHaveBeenCalledWith(
      ScreenNames.ComicDetail,
      {
        imgSource: img
      }
    )
  })
})
