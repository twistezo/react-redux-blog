import ReducersUtils from './reducersUtils'

export const filteredPosts = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_POSTS':
      return [...ReducersUtils.filterPostsBy(action.posts, action.filters)]
    default:
      return state
  }
}

const filtersShape = {
  tags: [],
  dates: [],
  searchValue: ''
}

export const filters = (state = filtersShape, action) => {
  switch (action.type) {
    case 'UNWRAP_TAGS':
      return {
        ...state,
        tags: [...ReducersUtils.unwrapTagsFromPosts(action.posts)]
      }
    case 'SWITCH_TAG':
      return {
        ...state,
        tags: [...ReducersUtils.switchTagState(action.tagName, state.tags)]
      }
    case 'UNWRAP_DATES':
      return {
        ...state,
        dates: [...ReducersUtils.unwrapDatesFromPosts(action.posts)]
      }
    case 'SWITCH_DATE_STATE':
      return {
        ...state,
        dates: [...ReducersUtils.switchDateState(action.date, state.dates)]
      }
    case 'HANDLE_SEARCH_INPUT':
      return {
        ...state,
        searchValue: action.value
      }
    case 'RESET_FILTERS':
      return ReducersUtils.resetFilters(action.filters)
    default:
      return state
  }
}
