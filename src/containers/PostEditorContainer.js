import { connect } from 'react-redux'
import PostEditor from '../components/MainPanel/PostEditor/PostEditor'
import { addPost } from '../actions/posts'
import { filterPosts, unwrapTags, unwrapDates } from '../actions/filters'

const mapStateToProps = state => ({
  posts: state.posts,
  filters: state.filters,
  authDisplayName: state.auth.displayName
})

const mapDispatchToProps = { addPost, filterPosts, unwrapTags, unwrapDates }

export const PostEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditor)
