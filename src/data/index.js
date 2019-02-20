class Post {
  constructor(id, title, text, author, date, tags) {
    this._id = id;
    this._title = title;
    this._text = text;
    this._author = author;
    this._date = date;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get text() {
    return this._text;
  }

  get author() {
    return this._author;
  }

  get date() {
    return this._date;
  }

  get tags() {
    return this._tags;
  }
}

const FilterType = Object.freeze({
  NONE: Symbol("none"),
  TAG: Symbol("tag"),
  TITLE: Symbol("title")
});

class Filter {
  constructor(type, data) {
    this._type = type;
    this._data = data;
  }

  get type() {
    return this._type;
  }

  get data() {
    return this._data;
  }
}

export { Post, Filter, FilterType };
