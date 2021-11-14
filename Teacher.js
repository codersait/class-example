import { Person } from "./Person.js";
export class Teacher extends Person {
  #year = new Date().getFullYear();
  #courses
  #specialty

  constructor(firstName, lastName, birthYear, address, courses, specialty) {
    super(firstName, lastName, birthYear, address);
    this.#courses = courses;
    this.#specialty = specialty;
  }

  get courses() {
    return this.#courses;
  }
  get specialty() {
    this.#specialty
  }
  calculateAge() {
    return this.#year - super.getBirthYear();
  }

  #getTeachersRoom() {
    if (this.#specialty.toLowerCase() === 'english' || this.#specialty.toLowerCase() === 'maths') {
      return '201'
    } else {
      return '404'
    }
  }

  toString() {
    return `${this.firstName} is teaching ${this.courses}.His specialty is ${this.#specialty}.You can visit him/her in room number ${this.#getTeachersRoom()}`
  }

}