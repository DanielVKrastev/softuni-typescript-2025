"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(param1, param2, param3) {
    let number1 = param1 == null || undefined ? 1 : Number(param1);
    let number2 = param2 == null || undefined ? 1 : Number(param2);
    let number3 = param3 == null || undefined ? 1 : Number(param3);
    return number1 * number2 * number3;
}
console.log(multiply('3', 5, '10'));
console.log(multiply('3', undefined, '10'));
console.log(multiply('3', 2, undefined));
console.log(multiply('2', '2'));
//# sourceMappingURL=01-optionalMultiplayer.js.map