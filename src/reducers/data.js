import {
  unwrapTagsFromPosts,
  sortPostsByDateDesc,
  switchTagState,
  filterPostsBy
} from "./reducersUtils";

export const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return [...sortPostsByDateDesc(action.posts)];
    default:
      return state;
  }
};

export const filteredPosts = (state = [], action) => {
  switch (action.type) {
    case "FILTER_POSTS":
      return [...filterPostsBy(action.posts, action.filter)];
    default:
      return state;
  }
};

export const tags = (state = [], action) => {
  switch (action.type) {
    case "UNWRAP_TAGS":
      return [...unwrapTagsFromPosts(action.posts)];
    case "SWITCH_TAG":
      return [...switchTagState(action.tagName, state)];
    default:
      return state;
  }
};
