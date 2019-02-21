import { combineReducers } from "redux";
import ReducersUtils from "../reducersUtils";

const tags = (state = {}, action) => {
  switch (action.type) {
    case "UNWRAP_TAGS":
      return [...ReducersUtils.unwrapTagsFromPosts(action.posts)];
    case "SWITCH_TAG":
      return [...ReducersUtils.switchTagState(action.tagName, state)];
    default:
      return state;
  }
};

const dates = (state = [], action) => {
  switch (action.type) {
    case "UNWRAP_DATES":
      return [...ReducersUtils.unwrapDatesFromPosts(action.posts)];
    case "SWITCH_DATE_STATE":
      return [...ReducersUtils.switchDateState(action.date, state)];
    default:
      return state;
  }
};

const searchValue = (state = "", action) => {
  switch (action.type) {
    case "HANDLE_SEARCH_INPUT":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  tags,
  dates,
  searchValue
});
