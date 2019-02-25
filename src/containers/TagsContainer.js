import { connect } from 'react-redux'
import { switchTagState, filterPosts } from '../actions'
import Tags from '../components/SidePanel/Tags'

const mapStateToProps = state => {
  return {
    posts: state.posts.data,
    filters: state.filters
  }
}

const mapDispatchToProps = { switchTagState, filterPosts }

export const TagsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags)
