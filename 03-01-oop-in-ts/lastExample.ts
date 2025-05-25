interface Roating {
    roar(): string;
    roar(otherName: string): string;
    roar(otherName: string, secondAnimal: string): string;
}

interface Friendly extends Roating{
    sayHello(): void;
    name: string;
}

interface Aged{
    age: number;
}

abstract class Animal implements Friendly{
    protected _name!: string;
    protected abstract age: number;
    constructor(name: string) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(val: string) {
        if(val.length === 0){
            throw new Error('Name cannot be empty.')
        }
        this._name = val;
    }

    abstract sayHello(): void;

    roar(): string;
    roar(otherName: string): string;
    roar(otherName: string, secondAnimal: string): string;
    roar(a?: string, b?: string) {
         let original = `Animal ${this._name}`;
         let second = a ? ` and ${a}` : '';
         let third = b ? ` and ${b}` : '';
         return `${original}${second}${third} roars`;
    };
}

class Bear extends Animal implements Aged {
    protected _age: number;
    constructor(name: string, age: number){
        super(name);
        this._age = age;
    }

    get age() {
        return this._age;
    }

    sayHello(): void {
        console.log(`${this._name} age: ${this.age} says hello.`);
    }

   // roar() { return `${this._name} roars`};
}

const bear = new Bear('Martha', 4);
console.log(bear.age);
console.log(bear.roar());
console.log(bear.roar('Stewart'));
console.log(bear.roar('Stewart', 'Jane'));


/***************************************/
let x!: number | undefined;
x = (Math.random() * 2 > 1) ? 10 : undefined; 
console.log(x);
