import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { fontSizeS, screenMargin } from '../../dimensions'
import Text from '../Text'

const TouchableContainer = styled.TouchableOpacity`
  margin-horizontal: ${screenMargin}px;
`

const TextContent = styled(Text)`
  font-size: ${fontSizeS};
`

// TODO: It can look better as a "hamburger" icon
// I could use react-native-vector-icons with FontAwesome
const HeaderButton = ({ onPress, title }) => (
  <TouchableContainer onPress={onPress}>
    <TextContent>{title}</TextContent>
  </TouchableContainer>
)

HeaderButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default HeaderButton
