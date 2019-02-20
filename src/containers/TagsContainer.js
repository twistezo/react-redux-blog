import { connect } from "react-redux";
import Tags from "../components/Tags";

const mapStateToProps = state => ({
  posts: state.posts
});

export const TagsContainer = connect(mapStateToProps)(Tags);
