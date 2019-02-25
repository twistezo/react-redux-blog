/**
 * Reducers
 *
 * Reducers specify how the application's state changes in response to actions
 * sent to the store. Remember that actions only describe what happened but
 * don't describe how the application's state changes.
 */

import { combineReducers } from 'redux'
import ReducersUtils from './reducersUtils'

const posts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS_FETCHED_SUCCESS':
      return {
        data: [...ReducersUtils.sortPostsByDateDesc(action.posts)],
        fetchingError: null
      }
    case 'POSTS_FETCHED_ERROR':
      return {
        data: [],
        fetchingError: action.fetchingError
      }
    default:
      return state
  }
}

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

const filters = (state = filtersShape, action) => {
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

const auth = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        ...state,
        isSignedIn: action.isSignedIn,
        errorMessage: action.errorMessage
      }
    case 'FETCHED_USER_DATA':
      return {
        ...state,
        displayName: action.displayName,
        email: action.email
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  filteredPosts,
  filters,
  auth
})
