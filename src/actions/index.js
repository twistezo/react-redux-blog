export const fetchPosts = posts => ({
  type: "FETCH_POSTS_SUCCESS",
  posts
});

export const filterPosts = (posts, tags, dates, searchValue) => ({
  type: "FILTER_POSTS",
  posts,
  tags,
  dates,
  searchValue
});

export const unwrapTags = posts => ({
  type: "UNWRAP_TAGS",
  posts
});

export const switchTagState = tagName => ({
  type: "SWITCH_TAG",
  tagName
});

export const unwrapDates = posts => ({
  type: "UNWRAP_DATES",
  posts
});

export const switchDateState = date => ({
  type: "SWITCH_DATE_STATE",
  date
});

export const handleSearchInput = value => ({
  type: "HANDLE_SEARCH_INPUT",
  value
});
