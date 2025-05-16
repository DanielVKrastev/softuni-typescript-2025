"use strict";
function unknowResponse(argument) {
    if ('value' in argument && typeof argument.value === 'string') {
        return argument.value;
    }
    return '-';
}
console.log(unknowResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknowResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknowResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(unknowResponse({ code: 201, text: 'Created', value: 'Object Created' }));
//# sourceMappingURL=07.js.map