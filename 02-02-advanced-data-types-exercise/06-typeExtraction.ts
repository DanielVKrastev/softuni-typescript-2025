let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };

let location = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`} };

type namesType = typeof names;
type locationType = typeof location;

function createCombinedFunction(names: namesType, location: locationType) {
    return function(combineObject: namesType & locationType) {
        console.log(`Hello, ${combineObject.getPersonInfo()} from ${combineObject.getAddressInfo()}`);
    }
}

let combinedFunction = createCombinedFunction(names, location);
let combinedPerson = Object.assign({}, names, location);
combinedFunction(combinedPerson);
