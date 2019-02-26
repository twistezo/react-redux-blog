import { connect } from 'react-redux'
import Navbar from '../components/Navbar/Navbar'
import { resetFilters, filterPosts, signOut } from '../actions'

const mapStateToProps = state => ({
  posts: state.posts.data,
  filters: state.filters,
  displayName: state.auth.displayName,
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = { resetFilters, signOut, filterPosts }

export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
