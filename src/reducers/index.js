import { combineReducers } from "redux";
import { posts, filteredPosts, tags, dates, searchValue } from "./data";

// Reducers specify how the app's state changes
// in response to actions sent to the store.
export default combineReducers({
  posts,
  filteredPosts,
  tags,
  dates,
  searchValue
});
