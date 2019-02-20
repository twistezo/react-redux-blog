import { FilterType } from "../data/";

export const sortPostsByDateDesc = posts =>
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export const unwrapTagsFromPosts = posts => {
  const allTags = Array.from(posts.map(post => post.tags).flat());
  const uniqueTags = Array.from(new Set(allTags));

  let uniqueWithQuantity = [];
  uniqueTags.forEach(uniqueTag =>
    uniqueWithQuantity.push({
      name: uniqueTag,
      quantity: allTags.filter(tag => tag === uniqueTag).length,
      state: false
    })
  );

  return uniqueWithQuantity;
};

export const switchTagState = (tagName, tags) => {
  let tag = tags.find(tag => tag.name === tagName);
  tag.state = !tag.state;
  return tags;
};

export const filterPostsBy = (posts, filter) => {
  switch (filter.type) {
    case FilterType.NONE:
      console.log("none");
      return posts;
    case FilterType.TAG:
      console.log("tag");
      return posts.filter(post =>
        post.tags.some(tag => tag.toLowerCase() === filter.data.toLowerCase())
      );
    case FilterType.TITLE:
      console.log("title");
      break;
    case FilterType.TEXT:
      console.log("text");
      break;
    default:
  }
};
