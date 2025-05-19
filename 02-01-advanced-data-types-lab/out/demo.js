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
//------------------------------------------------------------
// literal type and union type
let passFailGrade;
passFailGrade = 'fail';
console.log(passFailGrade);
let numericGrade;
numericGrade = 3;
numericGrade = 5;
function greet(humanId) {
    return humanId;
}
let danielPerson = {
    id: 1,
    firstName: 'Daniel',
    lastName: 'Krastev',
    age: 23,
    school: 'MG',
    gpa: 5.5,
};
function printStudentInfo(student) {
    console.log(`Student ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);
}
let min4oPerson = {
    id: 2,
    firstName: 'Min4o',
    lastName: 'Min4ev',
    age: 23,
};
printStudentInfo(danielPerson);
let partialOriginPoint = {
    x: 4
};
let originPoint = {
    x: 0,
    y: 0
};
function changeCoordinate(point, coordinateName, newValue) {
    point[coordinateName] = newValue;
}
changeCoordinate(originPoint, 'x', 5);
console.log(originPoint);
const leftLeaf = {
    value: 5
};
const rightLeaf = {
    value: 10
};
const root = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf,
};
console.log(root);
//# sourceMappingURL=demo.js.map