import ReducersUtils from "./reducersUtils";

export const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return [...ReducersUtils.sortPostsByDateDesc(action.posts)];
    default:
      return state;
  }
};

export const filteredPosts = (state = [], action) => {
  switch (action.type) {
    case "FILTER_POSTS":
      return [
        ...ReducersUtils.filterPostsBy(
          action.posts,
          action.tags,
          action.dates,
          action.searchValue
        )
      ];
    default:
      return state;
  }
};

export const tags = (state = [], action) => {
  switch (action.type) {
    case "UNWRAP_TAGS":
      return [...ReducersUtils.unwrapTagsFromPosts(action.posts)];
    case "SWITCH_TAG":
      return [...ReducersUtils.switchTagState(action.tagName, state)];
    default:
      return state;
  }
};

export const dates = (state = [], action) => {
  switch (action.type) {
    case "UNWRAP_DATES":
      return [...ReducersUtils.unwrapDatesFromPosts(action.posts)];
    case "SWITCH_DATE_STATE":
      return [...ReducersUtils.switchDateState(action.date, state)];
    default:
      return state;
  }
};

export const searchValue = (state = "", action) => {
  switch (action.type) {
    case "HANDLE_SEARCH_INPUT":
      return action.value;
    default:
      return state;
  }
};
