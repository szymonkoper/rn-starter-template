import PropTypes from 'prop-types'
import { LOCALES_CODES } from './constants'

// eslint-disable-next-line import/prefer-default-export
export const languagesShape = PropTypes.oneOf(LOCALES_CODES)
