import ReducersUtils from './reducersUtils'

const PostsShape = {
  data: [],
  fetchingError: null
}

export const posts = (state = PostsShape, action) => {
  switch (action.type) {
    case 'POSTS_FETCHED_SUCCESS':
      return {
        ...state,
        data: [...ReducersUtils.sortPostsByDateDesc(action.posts)],
        fetchingError: null
      }
    case 'POSTS_FETCHED_ERROR':
      return {
        ...state,
        data: [],
        fetchingError: action.fetchingError
      }
    case 'EDITED_POST_ID':
      return {
        ...state,
        editedPostId: action.postId
      }
    default:
      return state
  }
}
