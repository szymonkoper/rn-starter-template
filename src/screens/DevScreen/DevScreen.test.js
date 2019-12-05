/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  act,
  fireEvent,
  flushMicrotasksQueue,
  render
} from 'react-native-testing-library'
import { I18nextProvider } from 'react-i18next'
import { MockedProvider } from '@apollo/react-testing'
import i18next from 'i18n/__test__/testInitialize'
import DevScreen from './DevScreen'

jest.mock('notifications', () => ({
  createChannel: jest.fn(),
  openSettings: jest.fn(),
  showPermissionAlert: jest.fn(),
  hasPermission: jest.fn(() => Promise.resolve(true)),
  requestPermission: jest.fn(() => Promise.resolve(true)),
  showNotification: jest.fn(),
  Importance: { Urgent: 'Urgent' }
}))

jest.useFakeTimers()

describe('DevScreen', () => {
  let props = null
  let renderedScreen = null

  beforeEach(async () => {
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

    act(() => {
      jest.runAllTimers()
    })
    await flushMicrotasksQueue()
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
