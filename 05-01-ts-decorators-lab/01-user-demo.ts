function LogClass(constructor: Function){
    console.log('------------------------------');
    console.log('Class created!');
    console.log('------------------------------\n');
}

function LogAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor){
    console.log('***********************');
    console.log(`Accessors for property ${propertyName} created!`);
    console.log('***********************\n');
}

function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor){
    console.log('==========================');
    console.log(`Method ${methodName} created!`);
    console.log('==========================\n');
}

function LogProperty(target: any, propertyName: string) {
    console.log('++++++++++++++++++++++++++++++++');
    console.log(`Property ${propertyName} creadted!`);
    console.log('++++++++++++++++++++++++++++++++\n');
}

function LogParameter(target: any, methodName: string, parameterIndex: number){
    console.log('................................');
    console.log(`Parameter #${parameterIndex} for method ${methodName} created!`);
    console.log('................................\n');
}
@LogClass
class User {
    @LogProperty
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

    @LogMethod
    getInfo(@LogParameter condensed: boolean, @LogParameter test: string): string{
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} years old with email: ${this.email}`;
    }
}

//@LogClass
class Employee {
    name: string = 'Daniel';
    salary: number = 2000;
}