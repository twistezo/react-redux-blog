export const filterPosts = (posts, filters) => ({
  type: 'FILTER_POSTS',
  posts,
  filters
})

export const unwrapTags = posts => ({
  type: 'UNWRAP_TAGS',
  posts
})

export const switchTagState = tagName => ({
  type: 'SWITCH_TAG',
  tagName
})

export const unwrapDates = posts => ({
  type: 'UNWRAP_DATES',
  posts
})

export const switchDateState = date => ({
  type: 'SWITCH_DATE_STATE',
  date
})

export const handleSearchInput = value => ({
  type: 'HANDLE_SEARCH_INPUT',
  value
})

export const resetFilters = filters => ({
  type: 'RESET_FILTERS',
  filters
})
