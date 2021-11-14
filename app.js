import { Person } from "./Person.js";
import { Address } from "./Address.js";
import { Teacher } from "./Teacher.js";
import { Principal } from "./Principal.js";

// Person Instance
const person = new Person('Jane', 'Doe', 1994, new Address('10 Kings Road', 'London', 'England'));

// console.log(`${person}`);

// Teacher Instance
const teacher = new Teacher('John', 'Doe', 1975, new Address('1055 Street', 'London', 'England'), 'Geometry', 'Maths')

// console.log(`${teacher}`);

// Principal Instance

const principal = new Principal('Yaman', 'Way', 1990, new Address('9060 Queensway', 'London', 'England'), null, 'Web Development')

// console.log(`${principal}`);

// Polymorphism
const people = [person, teacher, principal]
people.forEach(person => console.log(`${person}`))



