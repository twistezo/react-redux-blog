import { connect } from 'react-redux'
import { filterPosts, handleSearchInput } from '../actions'
import SearchForm from '../components/Navbar/SearchForm'

const mapStateToProps = state => ({
  posts: state.posts.data,
  filters: state.filters
})

const mapDispatchToProps = { filterPosts, handleSearchInput }

export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
