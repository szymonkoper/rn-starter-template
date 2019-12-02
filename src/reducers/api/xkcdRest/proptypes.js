import PropTypes from 'prop-types'

export const comicShape = PropTypes.shape({
  img: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
})

export const comicsShape = PropTypes.arrayOf(comicShape)
