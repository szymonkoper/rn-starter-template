import { connect } from 'react-redux'
import { getNextComics, resetComics } from 'reducers/api/xkcdRest/actions'
import { selectComicsList } from 'reducers/api/xkcdRest/selectors'
import ComicsScreen from './ComicsScreen'

const mapStateToProps = ({ api: { xkcdRest } }) => ({
  comics: selectComicsList(xkcdRest),
  error: xkcdRest.error,
  hasNext: xkcdRest.hasNext,
  loading: xkcdRest.loading
})

const mapDispatchToProps = { getNextComics, resetComics }

export default connect(mapStateToProps, mapDispatchToProps)(ComicsScreen)
