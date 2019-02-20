import { connect } from "react-redux";
import { fetchPosts, filterPosts, unwrapTags } from "../actions";
import App from "../components/App";

const mapStateToProps = state => ({
  posts: state.posts,
  tags: state.tags
});

const mapDispatchToProps = { fetchPosts, filterPosts, unwrapTags };

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
