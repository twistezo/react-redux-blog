import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'
import App from '../components/App'

const mapStateToProps = state => ({
  posts: state.posts,
  filteredPosts: state.filteredPosts,
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = { fetchPosts }

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
