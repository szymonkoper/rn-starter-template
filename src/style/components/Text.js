import styled from 'styled-components/native'
import { Text as RNText } from 'react-native'
import { textColorPrimary } from '../colors'
// TODO: Add custom fonts

export default styled(RNText)`
  color: ${textColorPrimary};
  font-size: 26;
`
