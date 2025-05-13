"use strict";
let firstName = 'Daniel';
let lastName = 'Krastev';
let age = 23;
let hasGraduated = false;
let skills = ['JS', 'HTML', 'TS'];
let certificateInfo = [
    'MySQL',
    2025,
    true
];
let strNumberArr = [
    1,
    '1'
];
let strNumArr2 = [
    1,
    '1'
];
hasGraduated = true;
/******************************************************************/
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
function movePoint(point, moveDirection) {
    if (moveDirection === Directions.Up) {
        return { x: point.x, y: point.y + 1 };
    }
    else if (moveDirection === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    }
    else if (moveDirection === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    }
    else if (moveDirection === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
}
;
let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Right));
/******************************************************************/
function greetUser(username, addHello) {
    if (addHello) {
        return `Hello, ${username}`;
    }
    return username;
}
;
console.log(greetUser('Daniel', false));
/******************************************************************/
function isNumber(val) {
    return typeof val === 'number';
}
;
function formatData(a, b) {
    if (isNumber(a) && isNumber(b)) {
        console.log(a + b);
    }
    else {
        console.log(`${a} --- ${b}`);
    }
}
;
console.log(formatData(1, 2));
//# sourceMappingURL=demo.js.map