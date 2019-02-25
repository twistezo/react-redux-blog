import { connect } from 'react-redux'
import SearchResult from '../components/MainPanel/SearchResult'

const mapStateToProps = state => ({
  filteredPosts: state.filteredPosts
})

export const SearchResultContainer = connect(mapStateToProps)(SearchResult)
