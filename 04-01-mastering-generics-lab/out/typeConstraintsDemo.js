"use strict";
// ! Generic type constraints
Object.defineProperty(exports, "__esModule", { value: true });
function logItemId(item) {
    console.log(item);
}
//logItemId('pen40');
//logItemId(23);
//logItemId({ name: 'pencho' });
logItemId({ id: 2, name: 'Daniel', age: 23 });
logItemId({ id: 2, email: 'Daniel@gmail.com' });
//# sourceMappingURL=typeConstraintsDemo.js.map