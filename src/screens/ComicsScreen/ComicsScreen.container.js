import { connect } from 'react-redux'
import { getLatestComic } from 'reducers/api/xkcdRest/latestComicGetRequest/actions'
import ComicsScreen from './ComicsScreen'

const mapStateToProps = ({
  api: {
    xkcdRest: { latestComicGetRequest }
  }
}) => ({ latestComicGetRequest })

const mapDispatchToProps = { getLatestComic }

export default connect(mapStateToProps, mapDispatchToProps)(ComicsScreen)
