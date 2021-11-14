export class Person {
  #firstName;
  #lastName;
  #birthYear;
  #address;

  constructor(firstName, lastName, birthYear, address) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#birthYear = birthYear;
    this.#address = address;
  }

  get firstName() {
    return this.#firstName
  }
  get lastName() {
    return this.#lastName
  }
  getBirthYear() {
    return this.#birthYear
  }
  get address() {
    return this.#address
  }

  toString() {
    return `${this.#firstName} ${this.#lastName} lives in ${this.#address}`
  }
}