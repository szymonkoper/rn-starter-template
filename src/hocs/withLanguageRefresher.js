import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import i18next from 'i18next'
import { i18nPropTypes } from '../i18n'
import { settingsSelectors } from '../reducers/settings'

const withLanguageRefresher = () => Component => {
  const WrappedComponent = ({ language, ...otherProps }) => {
    useEffect(() => {
      i18next.changeLanguage(language)
    }, [language])

    return <Component {...otherProps} />
  }

  WrappedComponent.propTypes = {
    language: i18nPropTypes.languagesShape.isRequired
  }

  return WrappedComponent
}

const mapStateToProps = ({ settings }) => ({
  language: settingsSelectors.languageSelector(settings)
})

export default () =>
  _.flowRight(
    connect(mapStateToProps),
    withLanguageRefresher()
  )
