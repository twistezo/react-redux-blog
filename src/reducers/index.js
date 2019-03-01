import { combineReducers } from 'redux'
import { posts } from './posts'
import { auth } from './auth'
import { filters, filteredPosts } from './filters'

export default combineReducers({
  posts,
  filteredPosts,
  filters,
  auth
})
