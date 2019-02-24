import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import { resetFilters, filterPosts } from "../actions";

const mapStateToProps = state => ({
  posts: state.posts.data,
  filters: state.filters
});

const mapDispatchToProps = { resetFilters, filterPosts };

export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
