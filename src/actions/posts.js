import {
  fetchPostsFromFirestore,
  addPostToFirestore,
  removePostByIdFromFirestore
} from '../data/firebase'

import { unwrapTags, unwrapDates, filterPosts } from './filters'

const postsFetchedSuccess = posts => ({
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
      dispatch(postsFetchedSuccess(posts))
      dispatch(unwrapTags(posts))
      dispatch(unwrapDates(posts))
      dispatch(filterPosts(posts, getState().filters))
    })
    .catch(error => dispatch(postsFetchedError(error)))
}

export const addPost = post => dispatch => {
  addPostToFirestore(post).then(() => dispatch(fetchPosts()))
}

export const removePost = postId => dispatch => {
  removePostByIdFromFirestore(postId)
    .then(() => dispatch(fetchPosts()))
    .catch(err => console.log(err))
}

export const editedPostId = postId => ({
  type: 'EDITED_POST_ID',
  postId
})
