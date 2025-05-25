"use strict";
/*let test = { name: 'Pesho', age: 20 };

console.log(test.name);
type a = typeof test;
type b = keyof typeof test;
type c = {
    [k in keyof typeof test]: typeof test[k]
};*/
Object.defineProperty(exports, "__esModule", { value: true });
function returnTest() {
    let a = { name: 'pesho', age: 20, lucky: true };
    return a;
}
let b = returnTest();
console.log(b);
//# sourceMappingURL=test.js.map