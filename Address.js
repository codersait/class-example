export class Address {
  #district
  #city;
  #country;

  constructor(district, city, country) {
    this.#district = district;
    this.#city = city;
    this.#country = country;
  }

  get district() {
    return this.#district
  }
  get city() {
    return this.#city
  }
  get country() {
    return this.#country
  }

  toString() {
    return `${this.#district} ${this.#city}, ${this.#country}`
  }

}