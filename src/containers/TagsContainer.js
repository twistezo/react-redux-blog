import { connect } from "react-redux";
import { switchTagState, filterPosts } from "../actions";
import Tags from "../components/Tags";

const mapStateToProps = state => ({
  posts: state.posts,
  tags: state.tags,
  dates: state.dates,
  searchValue: state.searchValue
});

const mapDispatchToProps = { switchTagState, filterPosts };

export const TagsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
