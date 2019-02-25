import { connect } from 'react-redux'
import { fetchPosts, filterPosts, unwrapTags, unwrapDates } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
  posts: state.posts,
  filters: state.filters
})

const mapDispatchToProps = { fetchPosts, filterPosts, unwrapTags, unwrapDates }

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
