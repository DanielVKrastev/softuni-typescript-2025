abstract class Animal {
    static initializedAnimals: number = 0;
    protected _name: string;
    public abstract age: number;
    constructor(_name: string) {
        this._name = _name;
        Animal.initializedAnimals++;
    }

    abstract sayHello(): void;
    roar() { return `Animal ${this._name} roars` };
}

class Bear extends Animal {
    public age: number;
    constructor(name: string, age: number){
        super(name);
        this.age = age;
    }

    sayHello(): void {
        console.log(`${this._name} age: ${this.age} says hello.`);
    }

    roar() { return `${this._name} roars`};
}

console.log(Animal.initializedAnimals);

let bear = new Bear('Martha', 1);
let bear2 = new Bear('Martha2', 4);
console.log(bear.roar());
bear.sayHello();
console.log(bear2.roar());
// console.log(bear._name); -> ts error'
console.log(Animal.initializedAnimals);
