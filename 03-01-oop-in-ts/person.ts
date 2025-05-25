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
