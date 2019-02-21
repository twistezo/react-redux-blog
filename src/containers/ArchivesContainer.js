import { connect } from "react-redux";
import { filterPosts, switchDateState } from "../actions";
import Archive from "../components/Archives";

const mapStateToProps = state => ({
  posts: state.posts,
  tags: state.tags,
  dates: state.dates,
  searchValue: state.searchValue
});

const mapDispatchToProps = { filterPosts, switchDateState };

export const ArchivesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Archive);
