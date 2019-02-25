import { connect } from 'react-redux'
import AddPost from '../components/MainPanel/AddPost/AddPost'
import { addPost, filterPosts, unwrapTags, unwrapDates } from '../actions'

const mapStateToProps = state => ({
  posts: state.posts,
  filters: state.filters
})

const mapDispatchToProps = { addPost, filterPosts, unwrapTags, unwrapDates }

export const AddPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)
