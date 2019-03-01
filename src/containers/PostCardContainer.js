import { connect } from 'react-redux'
import PostCard from '../components/MainPanel/PostCard/PostCard'
import { removePost, editedPostId } from '../actions/posts'

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = { removePost, editedPostId }

export const PostCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard)
