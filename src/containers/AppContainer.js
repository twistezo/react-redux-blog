import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import App from "../components/App";

const sortPostsByDateDesc = posts =>
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const mapStateToProps = state => ({
  posts: sortPostsByDateDesc(state.posts)
});
const mapDispatchToProps = { fetchPosts };

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
