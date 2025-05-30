"use strict";
// ! Generic function with 2 type parameter
Object.defineProperty(exports, "__esModule", { value: true });
function makeTuple(el1, el2) {
    return [el1, el2];
}
const tuple1 = makeTuple('pen4o', 'daniel');
console.log(tuple1);
const tuple2 = makeTuple(4, -5);
console.log(tuple2);
const tuple3 = makeTuple('test', -5);
console.log(tuple3);
const tuple4 = makeTuple('test boolean', false);
console.log(tuple4);
//# sourceMappingURL=demo2.js.map