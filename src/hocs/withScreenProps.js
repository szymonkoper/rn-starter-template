import React from 'react'
import { useTranslation } from 'react-i18next'

export default Component => props => {
  const { t } = useTranslation()
  return <Component {...props} screenProps={{ t }} />
}
