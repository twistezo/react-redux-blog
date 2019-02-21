import { combineReducers } from "redux";
import filters from "./filters";
import ReducersUtils from "./reducersUtils";

const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...ReducersUtils.sortPostsByDateDesc(action.posts)];
    default:
      return state;
  }
};

export const filteredPosts = (state = [], action) => {
  switch (action.type) {
    case "FILTER_POSTS":
      return [...ReducersUtils.filterPostsBy(action.posts, action.filters)];
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  filteredPosts,
  filters
});
