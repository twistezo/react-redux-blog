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

  static filterPostsBy = (posts, filters) => {
    const tags = filters.tags;
    const dates = filters.dates;
    const searchValue = filters.searchValue;

    let filtered = [];
    const switchedOnTags = tags.filter(tag => tag.state).map(tag => tag.name);
    filtered = posts.filter(
      post =>
        // by tags
        DataUtils.arrayContainsAllElementsFromAnother(
          post.tags,
          switchedOnTags
        ) &&
        // by searchValue (title)
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    // by date - years
    let switchedOnYears = dates
      .filter(date => date.yearState)
      .map(date => date.year);
    if (switchedOnYears.length !== 0) {
      filtered = filtered.filter(post =>
        DataUtils.arrayContainsAllElementsFromAnother(switchedOnYears, [
          post.date.getFullYear()
        ])
      );
    }

    // by date - months
    let switchedOnMonths = dates
      .map(date =>
        date.months
          .map(month => ({
            year: date.year,
            month: month.name,
            state: month.state
          }))
          .flat()
      )
      .flat()
      .filter(month => month.state);
    if (switchedOnMonths.length !== 0) {
      filtered = filtered.filter(
        post =>
          switchedOnMonths.some(
            item => item.year === post.date.getFullYear()
          ) &&
          switchedOnMonths.some(
            item => item.month === ReducersUtils.monthNameFromDate(post.date)
          )
      );
    }
    return filtered;
  };

  static unwrapDatesFromPosts = posts => {
    const years = Array.from(
      new Set(posts.map(post => post.date.getFullYear()))
    );

    let yearsWithMonths = [];
    years.forEach(year =>
      yearsWithMonths.push({
        year: year,
        yearState: false,
        months: Array.from(
          new Set(
            posts
              .filter(post => post.date.getFullYear() === year)
              .map(post => ReducersUtils.monthNameFromDate(post.date))
          )
        ).map(month => ({
          name: month,
          quantity: ReducersUtils.postsQuantityByDate(posts, month, year),
          state: false
        }))
      })
    );
    return yearsWithMonths;
  };

  static postsQuantityByDate = (posts, month, year) =>
    posts.filter(
      post =>
        post.date.getFullYear() === year &&
        ReducersUtils.monthNameFromDate(post.date) === month
    ).length;

  static monthNameFromDate = date =>
    date.toLocaleString("en-us", { month: "long" });

  static switchDateState = (dateToSwitch, archiveDates) => {
    if (dateToSwitch.month === undefined) {
      let date = archiveDates.find(date => date.year === dateToSwitch.year);
      date.yearState = !date.yearState;
      // reset all months state
      archiveDates.forEach(date =>
        date.months.forEach(month => (month.state = false))
      );
    } else {
      let month = archiveDates
        .find(date => date.year === dateToSwitch.year)
        .months.find(month => month.name === dateToSwitch.month);
      month.state = !month.state;
      // reset all years state
      archiveDates.forEach(date => (date.yearState = false));
    }
    return archiveDates;
  };

  static resetFilters = filters => {
    let reseted = Object.assign({}, filters);
    reseted.tags.forEach(tag => (tag.state = false));
    reseted.dates.forEach(date => (date.yearState = false));
    reseted.dates.forEach(date =>
      date.months.forEach(month => (month.state = false))
    );
    reseted.searchValue = "";
    return reseted;
  };
}

export default ReducersUtils;
