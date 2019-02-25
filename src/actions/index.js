/**
 * Action creators
 *
 * Actions are payloads of information that send data from your application to your store.
 * They are the only source of information for the store.
 */

import {
  fetchPostsFromFirestore,
  addPostToFirestore,
  signInWithEmailAndPassword,
  fetchSignedInUserData,
  signOutUser
} from '../data/firebase'

const postsFetched = posts => ({
  type: 'POSTS_FETCHED_SUCCESS',
  posts
})

const postsFetchedError = fetchingError => ({
  type: 'POSTS_FETCHED_ERROR',
  fetchingError
})

export const fetchPosts = () => (dispatch, getState) => {
  fetchPostsFromFirestore()
    .then(posts => {
      dispatch(postsFetched(posts))
      dispatch(unwrapTags(posts))
      dispatch(unwrapDates(posts))
      dispatch(filterPosts(posts, getState().filters))
    })
    .catch(error => dispatch(postsFetchedError(error)))
}

export const addPost = post => dispatch => {
  addPostToFirestore(post).then(() => dispatch(fetchPosts()))
}

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

export const signedIn = (isSignedIn, errorMessage) => ({
  type: 'SIGNED_IN',
  isSignedIn,
  errorMessage
})

export const fetchedUserData = (displayName, email) => ({
  type: 'FETCHED_USER_DATA',
  displayName,
  email
})

export const signIn = (email, password) => dispatch =>
  signInWithEmailAndPassword(email, password)
    .then(() => dispatch(signedIn(true, '')))
    .then(() => fetchSignedInUserData())
    .then(data => dispatch(fetchedUserData(data.name, data.email)))
    .catch(error => dispatch(signedIn(false, error.message)))

export const signOut = () => dispatch =>
  signOutUser()
    .then(() => dispatch(signedIn(false, '')))
    .then(() => dispatch(fetchedUserData('', '')))
