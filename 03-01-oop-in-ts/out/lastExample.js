"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _name;
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if (val.length === 0) {
            throw new Error('Name cannot be empty.');
        }
        this._name = val;
    }
    roar(a, b) {
        let original = `Animal ${this._name}`;
        let second = a ? ` and ${a}` : '';
        let third = b ? ` and ${b}` : '';
        return `${original}${second}${third} roars`;
    }
    ;
}
class Bear extends Animal {
    _age;
    constructor(name, age) {
        super(name);
        this._age = age;
    }
    get age() {
        return this._age;
    }
    sayHello() {
        console.log(`${this._name} age: ${this.age} says hello.`);
    }
}
const bear = new Bear('Martha', 4);
console.log(bear.age);
console.log(bear.roar());
console.log(bear.roar('Stewart'));
console.log(bear.roar('Stewart', 'Jane'));
/***************************************/
let x;
x = (Math.random() * 2 > 1) ? 10 : undefined;
console.log(x);
//# sourceMappingURL=lastExample.js.map