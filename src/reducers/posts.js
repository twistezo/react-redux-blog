export const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return [...action.posts];
    default:
      return state;
  }
};
