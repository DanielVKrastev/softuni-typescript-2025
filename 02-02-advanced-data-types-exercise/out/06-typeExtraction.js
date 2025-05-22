"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}`; } };
let location = { city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`; } };
function createCombinedFunction(names, location) {
    return function (combineObject) {
        console.log(`Hello, ${combineObject.getPersonInfo()} from ${combineObject.getAddressInfo()}`);
    };
}
let combinedFunction = createCombinedFunction(names, location);
let combinedPerson = Object.assign({}, names, location);
combinedFunction(combinedPerson);
//# sourceMappingURL=06-typeExtraction.js.map