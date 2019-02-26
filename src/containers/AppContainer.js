import { connect } from 'react-redux'
import { fetchPosts, filterPosts, unwrapTags, unwrapDates } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
  posts: state.posts,
  filters: state.filters,
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = { fetchPosts, filterPosts, unwrapTags, unwrapDates }

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
