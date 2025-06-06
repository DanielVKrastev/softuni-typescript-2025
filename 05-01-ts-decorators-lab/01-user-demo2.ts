function FreezeClass(constructor: Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function ValidateStringAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor){
    const originalSetter = descriptor.set;

    descriptor.set = function(val: string) {
        if(val.length < 3) {
            throw new Error('Lenght must be minimum 3 characters.');
        }

        originalSetter?.call(this, val);
    }

    return descriptor;
}

@FreezeClass
class User {
    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @ValidateStringAccessor
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

const user1 = new User('Daniel', 24, 'daniel@gmail.bg');
user1.email = 'ad';

// console.log(Object.isFrozen(User));
// console.log(Object.isFrozen((User.prototype)));
