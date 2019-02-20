import { combineReducers } from "redux";
import { posts } from "./posts";

// Reducers specify how the app's state changes
// in response to actions sent to the store.
export default combineReducers({
  posts
});
