import { connect } from 'react-redux'
import { settingsActions, settingsSelectors } from 'reducers/settings'
import { getLocale, i18nConstants } from 'i18n'

import DevScreen from './DevScreen'

const mapStateToProps = ({ settings }) => {
  return {
    language:
      getLocale(settingsSelectors.languageSelector(settings)) ||
      i18nConstants.FALLBACK_LOCALE.languageCode
  }
}

const mapDispatchToProps = {
  updateLanguage: settingsActions.updateLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(DevScreen)
