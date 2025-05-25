"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    greet(a, b) {
        console.log(typeof a === 'string'
            ? `${a} ${b}`
            : `Number: ${a}`);
    }
}
let person = new Person();
person.greet(13);
person.greet('John', 'Doe');
//# sourceMappingURL=person.js.map