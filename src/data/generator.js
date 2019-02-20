import Chance from "chance";
import uuidv1 from "uuid/v1";
import DataUtils from "./dataUtils";

class DataGenerator {
  constructor() {
    this._data = [];
    this._tags = ["#javascript", "#css", "#rust", "#webpack", "#cargo"];
  }

  _generate = quantity => {
    const chance = new Chance();
    for (let i = 0; i < quantity; i++) {
      this._data.push(
        new Post(
          uuidv1(),
          chance.sentence({ words: 10 }),
          chance.paragraph({ sentences: 20 }),
          "twistezo",
          chance.date({
            string: false,
            american: false,
            year: DataUtils.randomArrayItem([2017, 2018, 2019])
          }),
          DataUtils.arrayFromArrayRandomItems(this._tags)
        )
      );
    }

    return DataUtils.checkNullEmptyOrUndefinded(this._data)
      ? this._data
      : new Error("Generate data failed.");
  };

  fetch = quantity =>
    new Promise((resolve, reject) => {
      const result = this._generate(quantity);
      if (result instanceof Error) {
        reject(
          new Error("Error while fetching data. The data seems to be broken.")
        );
      } else {
        resolve(result);
      }
    });
}

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

export { DataGenerator, Post };
