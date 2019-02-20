import { connect } from "react-redux";
import PostBoard from "../components/PostsBoard";

const mapStateToProps = state => ({
  posts: state.posts
});

export const PostBoardContainer = connect(mapStateToProps)(PostBoard);
