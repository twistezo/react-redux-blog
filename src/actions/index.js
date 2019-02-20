// `fetchPosts` is action creater
// `FETCH_POSTS` is action
export const fetchPosts = posts => ({
  type: "FETCH_POSTS_SUCCESS",
  posts
});
