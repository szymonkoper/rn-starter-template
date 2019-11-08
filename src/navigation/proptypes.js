import PropTypes from 'prop-types'

export default PropTypes.shape({
  getParam: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  pop: PropTypes.func.isRequired,
  popToTop: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired
})
