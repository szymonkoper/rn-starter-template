/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { fireEvent, render } from 'react-native-testing-library'
import { I18nextProvider } from 'react-i18next'
import { MockedProvider } from '@apollo/react-testing'
import i18next from '../../i18n/__test__/testInitialize' // maybe it should be in tests setup
import DevScreen from './DevScreen'

describe('DevScreen', () => {
  let props = null
  let renderedScreen = null

  beforeEach(() => {
    props = {
      language: 'pl',
      updateLanguage: jest.fn()
    }

    renderedScreen = render(
      <I18nextProvider i18n={i18next}>
        <MockedProvider>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <DevScreen {...props} />
        </MockedProvider>
      </I18nextProvider>
    )
  })

  it('renders correctly', () => {
    const { toJSON } = renderedScreen
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls updateLanguage actions when pressed correctly', () => {
    const { getByText } = renderedScreen

    fireEvent.press(getByText('pl'))
    expect(props.updateLanguage).not.toHaveBeenCalled()

    fireEvent.press(getByText('en'))
    expect(props.updateLanguage).toHaveBeenCalledWith('en')
  })
})
