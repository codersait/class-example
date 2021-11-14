import { Teacher } from "./Teacher.js";
export class Principal extends Teacher {
  #roomNumber;

  constructor(firstName, lastName, birthYear, address, courses, specialty) {
    super(firstName, lastName, birthYear, address, courses, specialty);
    this.#roomNumber = 101;

  }

  get roomNumber() {
    return this.#roomNumber;

  }

  toString() {
    return `The principal ${this.firstName} ${super.calculateAge()}. His room is ${this.#roomNumber} `
  }

}