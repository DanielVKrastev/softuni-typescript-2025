import { Person } from "./test";

let person = new Person('Pesho', 20);

function printName(person: Person){
    console.log(person.name);
}

printName(person);