/*let test = { name: 'Pesho', age: 20 };

console.log(test.name);
type a = typeof test;
type b = keyof typeof test;
type c = {
    [k in keyof typeof test]: typeof test[k]
};*/


/*
//type test = { name: 'pesho' | 'gosho', age: number }
type test = { name: string, age: number }

function returnTest(): test {
    let a = { name: 'pesho', age: 20, lucky: true };
    return a;
}

let b = returnTest();
console.log(b);
*/

type test = {
    name: string,
    ageInfo: {
        age: number
    }
};

type test2 = {
    name: 'Pesho' | 'Goshko',
    ageInfo: {
        age: number
    }
};

let person: test2 = {
    name: 'Pesho',
    ageInfo: {
        age: 12
    }
}

let c: test = person;