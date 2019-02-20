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
      return [...ReducersUtils.filterPostsBy(action.posts, action.filter)];
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
