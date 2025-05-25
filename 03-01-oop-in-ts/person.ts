/*
class Person {
    greet(num: number): void;
    greet(fName: string, lName: string): void;
    greet(a: string | number, b?: string) {
        console.log(typeof a === 'string' 
            ? `${a} ${b}`
            : `Number: ${a}`
        )
    }
}

let person = new Person();
person.greet(13);
person.greet('John', 'Doe');
//person.greet('John')

interface Barker {
    bark(person: Person): string;
}

let obj:Barker = { bark() { return '20' }}
//obj.bark()

type a = Person | never;
type b = string & number; //never
*/

class Person {
    _name!: string; // !
    constructor(name: string) {
        this.name = name;
    }
    
    get name() {
        return this._name;
    }

    set name(val: string) {
        this._name = val;
    }
}