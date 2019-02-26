import Chance from 'chance'
import uuidv1 from 'uuid/v1'
import DataUtils from './dataUtils'
import { Post } from './'

class DataGenerator {
  constructor() {
    this._data = []
    this._tags = ['#javascript', '#css', '#rust', '#webpack', '#cargo']
  }

  _generate = quantity => {
    const chance = new Chance()
    const examplePost = DataUtils.generateExampleMarkdownPost()
    for (let i = 0; i < quantity; i++) {
      this._data.push(
        new Post(
          uuidv1(),
          examplePost.title,
          examplePost.shortDescription,
          examplePost.text,
          'twistezo',
          chance.date({
            string: false,
            american: false,
            year: DataUtils.randomArrayItem([2016, 2017, 2018])
          }),
          DataUtils.arrayFromArrayRandomItems(this._tags),
          'https://avatars.dicebear.com/v2/identicon/' +
            chance.word({ length: 15 }) +
            '.svg'
        )
      )
    }

    return DataUtils.isNullEmptyOrUndefinded(this._data)
      ? new Error('Generate data failed.')
      : this._data
  }

  fetch = quantity =>
    new Promise((resolve, reject) => {
      const result = this._generate(quantity)
      if (result instanceof Error) {
        reject(
          new Error('Error while fetching data. The data seems to be broken.')
        )
      } else {
        resolve(result)
      }
    })
}

export default DataGenerator
