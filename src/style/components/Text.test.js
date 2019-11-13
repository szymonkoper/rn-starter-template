/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { fireEvent, render } from 'react-native-testing-library'
import Text from './Text'

describe('Text', () => {
  const textContent = '<Text> content'

  it('renders correctly', () => {
    const { toJSON } = render(
      <Text style={{ fontSize: 12 }}>
        {/* eslint-disable react-native/no-inline-styles */}
        <Text style={{ color: 'red' }}>Nested text</Text> and usual text
      </Text>
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress correctly', () => {
    const onPress = jest.fn()
    const { getByText } = render(<Text onPress={onPress}>{textContent}</Text>)

    fireEvent.press(getByText(textContent))

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
