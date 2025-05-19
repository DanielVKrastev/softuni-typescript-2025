"use strict";
function printGreeting(text) {
    if (typeof text === 'string') {
        console.log(text);
    }
    else {
        console.log(text.join(' '));
    }
}
printGreeting('Hello, Daniel');
printGreeting(['Hello', 'its', 'me']);
//# sourceMappingURL=demo.js.map