import { connect } from 'react-redux'
import { filterPosts, switchDateState } from '../actions'
import Archive from '../components/SidePanel/Archives'

const mapStateToProps = state => ({
  posts: state.posts.data,
  filters: state.filters
})

const mapDispatchToProps = { filterPosts, switchDateState }

export const ArchivesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Archive)
