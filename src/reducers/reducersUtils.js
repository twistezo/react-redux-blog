import { FilterType } from "../data/";
import DataUtils from "../data/dataUtils";

class ReducersUtils {
  static sortPostsByDateDesc = posts =>
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  static unwrapTagsFromPosts = posts => {
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

  static switchTagState = (tagName, tags) => {
    let tag = tags.find(tag => tag.name === tagName);
    tag.state = !tag.state;
    return tags;
  };

  static filterPostsBy = (posts, filter) => {
    switch (filter.type) {
      case FilterType.NONE:
        return posts;
      case FilterType.TAG:
        const turnedOnTags = filter.data
          .filter(tag => tag.state)
          .map(tag => tag.name);
        return posts.filter(post =>
          DataUtils.arrayContainsAllElementsFromAnother(post.tags, turnedOnTags)
        );
      case FilterType.TITLE:
        return posts.filter(post => post.title.includes(filter.data));
      default:
    }
  };
}

export default ReducersUtils;
