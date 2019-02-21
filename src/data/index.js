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

export { Post };
