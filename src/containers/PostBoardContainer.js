import { connect } from "react-redux";
import PostBoard from "../components/PostsBoard";

const mapStateToProps = state => ({
  filteredPosts: state.filteredPosts
});

export const PostBoardContainer = connect(mapStateToProps)(PostBoard);
