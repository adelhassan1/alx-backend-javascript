export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  /* eslint-disable-next-line class-methods-use-this */
  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  /* eslint-disable-next-line class-methods-use-this */
  _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  /* eslint-disable-next-line class-methods-use-this */
  _validateStudents(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._validateLength(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._validateStudents(students);
  }
}
