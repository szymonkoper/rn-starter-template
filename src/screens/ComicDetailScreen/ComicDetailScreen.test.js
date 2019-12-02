import React from 'react'
import { render } from 'react-native-testing-library'
import ComicDetailScreen from './ComicDetailScreen'

describe('ComicDetailScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <ComicDetailScreen imgSource="http://example.com/image.jpg" />
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
