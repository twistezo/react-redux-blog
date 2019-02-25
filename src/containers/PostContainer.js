import { connect } from 'react-redux'
import Post from '../components/MainPanel/Post'

const mapStateToProps = state => ({
  posts: state.posts.data
})

export const PostContainer = connect(mapStateToProps)(Post)
