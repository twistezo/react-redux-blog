import { connect } from 'react-redux'
import {
  filterPosts,
  switchDateState,
  switchTagState
} from '../actions/filters'
import SidePanel from '../components/SidePanel/SidePanel'

const mapStateToProps = state => ({
  posts: state.posts.data,
  filters: state.filters
})

const mapDispatchToProps = { filterPosts, switchDateState, switchTagState }

export const SidePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel)
