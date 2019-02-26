import { connect } from 'react-redux'
import PostCard from '../components/MainPanel/PostCards/PostCard'
import { removePost } from '../actions/'

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = { removePost }

export const PostCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard)
