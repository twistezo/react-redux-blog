import { connect } from 'react-redux'
import Navbar from '../components/Navbar/Navbar'
import { signIn, signOut } from '../actions/auth'
import {
  filterPosts,
  handleSearchInput,
  resetFilters
} from '../actions/filters'

const mapStateToProps = state => ({
  posts: state.posts.data,
  filters: state.filters,
  displayName: state.auth.displayName,
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
  filterPosts,
  handleSearchInput,
  resetFilters,
  signIn,
  signOut
}

export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
