export const fetchPosts = posts => ({
  type: "FETCH_POSTS_SUCCESS",
  posts
});

export const filterPosts = (posts, filter) => ({
  type: "FILTER_POSTS",
  posts,
  filter
});

export const unwrapTags = posts => ({
  type: "UNWRAP_TAGS",
  posts
});

export const switchTag = tagName => ({
  type: "SWITCH_TAG",
  tagName
});
