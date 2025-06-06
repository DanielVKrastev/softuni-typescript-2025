function LogClass(constructor: Function){
    console.log('------------------------------');
    console.log('Class created!');
    console.log('------------------------------');
}

function LogAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor){
    console.log('***********************');
    console.log(`Accessors for property ${propertyName} name`);
    console.log('***********************');
}

@LogClass
class User {
    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @LogAccessor
    get email(){
        return this._email;
    }

    set email(val: string){
        this._email = val;
    }

    getInfo(condensed: boolean): string{
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} years old with email: ${this.email}`;
    }
}

//@LogClass
class Employee {
    name: string = 'Daniel';
    salary: number = 2000;
}