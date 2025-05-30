"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElement(arr) {
    return arr[0];
}
/*
function getFirstNumElement(arr: number[]): number {
    return arr[0];
}
*/
const firstlEl = getFirstElement(['test', 'daniel']);
console.log(firstlEl.length);
const firstNumEl = getFirstElement([45, 123, -12]);
console.log(firstNumEl.toFixed(2));
//# sourceMappingURL=firstDemo.js.map