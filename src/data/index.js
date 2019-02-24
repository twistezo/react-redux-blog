class Post {
  constructor(
    id,
    title,
    shortDescription,
    text,
    author,
    date,
    tags,
    mainImage
  ) {
    this._id = id;
    this._title = title;
    this._shortDescription = shortDescription;
    this._text = text;
    this._author = author;
    this._date = date;
    this._tags = tags;
    this._mainImage = mainImage;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get shortDescription() {
    return this._shortDescription;
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

  set date(date) {
    this._date = date;
  }

  get tags() {
    return this._tags;
  }

  get mainImage() {
    return this._mainImage;
  }
}

export { Post };
