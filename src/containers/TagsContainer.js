import { connect } from "react-redux";
import { switchTag, filterPosts } from "../actions";
import Tags from "../components/Tags";

const mapStateToProps = state => ({
  posts: state.posts,
  tags: state.tags
});

const mapDispatchToProps = { switchTag, filterPosts };

export const TagsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
