/**
 * Action creators
 *
 * Actions are payloads of information that send data from your application to your store.
 * They are the only source of information for the store.
 */

import { fetchPostsFromFirestore, addPostToFirestore } from "../data/firebase";

const fetchinghError = {
  occured: false,
  message: ""
};

const postsFetched = (posts, error) => ({
  type: "FETCH_POSTS",
  posts,
  error
});

export const fetchPosts = () => (dispatch, getState) => {
  fetchPostsFromFirestore()
    .then(posts => {
      dispatch(postsFetched(posts, fetchinghError));
      dispatch(unwrapTags(posts));
      dispatch(unwrapDates(posts));
      dispatch(filterPosts(posts, getState().filters));
    })
    .catch(error => {
      let fetchingError = fetchinghError;
      fetchingError.occured = true;
      fetchingError.message = error.message;
      return dispatch(postsFetched([], fetchingError));
    });
};

export const addPost = post => dispatch => {
  addPostToFirestore(post).then(() => dispatch(fetchPosts()));
};

export const filterPosts = (posts, filters) => ({
  type: "FILTER_POSTS",
  posts,
  filters
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

export const resetFilters = filters => ({
  type: "RESET_FILTERS",
  filters
});
