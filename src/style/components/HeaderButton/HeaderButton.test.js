import React from 'react'
import { fireEvent, render } from 'react-native-testing-library'
import HeaderButton from './HeaderButton'

const BUTTON_TITLE = "A header button's title"

describe('HeaderButton', () => {
  let props = null

  const renderComponent = () =>
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<HeaderButton {...props} />)

  beforeEach(() => {
    props = {
      onPress: jest.fn(),
      title: BUTTON_TITLE
    }
  })

  it('renders correctly', () => {
    const { toJSON } = renderComponent(props)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress correctly', () => {
    const { getByText } = renderComponent(props)

    fireEvent.press(getByText(BUTTON_TITLE))

    expect(props.onPress).toHaveBeenCalledTimes(1)
  })
})
