import { connect } from 'react-redux'
import { settingsActions, settingsSelectors } from '../../reducers/settings'

import DevScreen from './DevScreen'

const mapStateToProps = ({ settings }) => ({
  language: settingsSelectors.languageSelector(settings)
})

const mapDispatchToProps = {
  updateLanguage: settingsActions.updateLanguage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevScreen)
