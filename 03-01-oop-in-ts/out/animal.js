"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    static initializedAnimals = 0;
    _name;
    constructor(_name) {
        this._name = _name;
        Animal.initializedAnimals++;
    }
    roar() { return `Animal ${this._name} roars`; }
    ;
}
class Bear extends Animal {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayHello() {
        console.log(`${this._name} age: ${this.age} says hello.`);
    }
    roar() { return `${this._name} roars`; }
    ;
}
console.log(Animal.initializedAnimals);
let bear = new Bear('Martha', 1);
let bear2 = new Bear('Martha2', 4);
console.log(bear.roar());
bear.sayHello();
console.log(bear2.roar());
// console.log(bear._name); -> ts error'
console.log(Animal.initializedAnimals);
//# sourceMappingURL=animal.js.map