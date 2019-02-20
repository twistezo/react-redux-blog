class DataUtils {
  static randomArrayItem = array =>
    array[Math.floor(Math.random() * array.length)];

  static checkNullEmptyOrUndefinded = value =>
    value !== null && value !== [] && value !== undefined;

  static arrayFromArrayRandomItems = array =>
    Array.from(array).filter(() => DataUtils.randomBoolean());

  static randomBoolean = () => Math.random() >= 0.5;

  static arrayContainsAllElementsFromAnother = (array0, array1) =>
    array1
      .map(a => {
        return array0.some(b => {
          return b === a;
        });
      })
      .every(e => e);
}

export default DataUtils;
