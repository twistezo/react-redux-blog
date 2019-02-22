import Chance from "chance";
import uuidv1 from "uuid/v1";
import showdown from "showdown";
import DataUtils from "./dataUtils";
import { Post } from "./";

class DataGenerator {
  constructor() {
    this._data = [];
    this._tags = ["#javascript", "#css", "#rust", "#webpack", "#cargo"];
    this._chance = new Chance();
    this._mdToHtmlConverter = new showdown.Converter({ noHeaderId: true });
  }

  _generate = quantity => {
    for (let i = 0; i < quantity; i++) {
      this._data.push(
        new Post(
          uuidv1(),
          this._chance.sentence({ words: 6 }),
          this._chance.paragraph({ sentences: 3 }),
          this._generateHtmlText(),
          "twistezo",
          this._chance.date({
            string: false,
            american: false,
            year: DataUtils.randomArrayItem([2017, 2018, 2019])
          }),
          DataUtils.arrayFromArrayRandomItems(this._tags),
          "https://avatars.dicebear.com/v2/identicon/" +
            this._chance.word({ length: 15 }) +
            ".svg"
        )
      );
    }

    return DataUtils.isNullEmptyOrUndefinded(this._data)
      ? new Error("Generate data failed.")
      : this._data;
  };

  _generateHtmlText = () =>
    this._mdToHtmlConverter.makeHtml(
      `###` +
        this._chance.sentence({ words: 6 }) +
        `\n` +
        this._chance.paragraph({ sentences: 10 }) +
        `\n\n![Alt Text](` +
        `https://avatars.dicebear.com/v2/identicon/` +
        this._chance.word({ length: 15 }) +
        ".svg" +
        ` =200x200)` +
        `\n\nPhoto: *` +
        this._chance.sentence({ words: 6 }) +
        `*` +
        `\n\nVisit: <http://www.example.com>` +
        `\n\n###` +
        this._chance.sentence({ words: 6 }) +
        `\n` +
        this._chance.paragraph({ sentences: 5 }) +
        `\n` +
        `
        \`\`\`
        static arrayContainsAllElementsFromAnother = (array0, array1) =>
          array1
            .map(a => {
              return array0.some(b => {
                return b === a;
              });
            })
            .every(e => e);
        \`\`\`
        `
    );

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

export { DataGenerator };
