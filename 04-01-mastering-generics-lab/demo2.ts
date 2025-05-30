// ! Generic function with 2 type parameter

function makeTuple<T, U>(el1: T, el2: U): [T, U] {

    return [el1, el2];
}

const tuple1 = makeTuple<string, string>('pen4o', 'daniel');
console.log(tuple1);

const tuple2 = makeTuple<number, number>(4, -5);
console.log(tuple2);

const tuple3 = makeTuple<string, number>('test', -5);
console.log(tuple3);

const tuple4 = makeTuple<string, boolean>('test boolean', false);
console.log(tuple4);