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
function printStudentInfo(student) {
    console.log(`Student ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);
}
let danielPerson = {
    id: 1,
    firstName: 'Daniel',
    lastName: 'Krastev',
    age: 23,
    school: 'MG',
    gpa: 5.5,
};
printStudentInfo(danielPerson);
//# sourceMappingURL=demo.js.map