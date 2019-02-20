class DataUtils {
  static randomArrayItem = array =>
    array[Math.floor(Math.random() * array.length)];

  static checkNullEmptyOrUndefinded = value =>
    value !== null && value !== [] && value !== undefined;

  static arrayFromArrayRandomItems = array =>
    Array.from(array).filter(() => DataUtils.randomBoolean());

  static randomBoolean = () => Math.random() >= 0.5;
}

export default DataUtils;
