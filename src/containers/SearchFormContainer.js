import { connect } from "react-redux";
import { filterPosts, handleSearchInput } from "../actions";
import SearchForm from "../components/SearchForm";

const mapStateToProps = state => ({
  posts: state.posts,
  tags: state.tags,
  dates: state.dates,
  searchValue: state.searchValue
});

const mapDispatchToProps = { filterPosts, handleSearchInput };

export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
