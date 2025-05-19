function printGreeting(text: string | string[]): void { //union type
    if(typeof text === 'string'){
        console.log(text);
    }else{
        console.log(text.join(' '));
    }
    
}

printGreeting('Hello, Daniel');
printGreeting(['Hello', 'its', 'me']);

//------------------------------------------------------------
// literal type and union type
let passFailGrade: 'pass' | 'fail';
passFailGrade = 'fail';
console.log(passFailGrade);

let numericGrade: 2 | 3 | 4 | 5 | 6;
numericGrade = 3;
numericGrade = 5;

// primitive type
type Id = number;

function greet(humanId: Id){
    return humanId;
}

// intersection
type Person = {
    id: Id;
    firstName: string;
    lastName: string;
    age: number
};

type StudentProfile = {
    school: string;
    gpa: number;
};

type FullStudent = Person & StudentProfile;

let danielPerson: FullStudent = {
    id: 1,
    firstName: 'Daniel',
    lastName: 'Krastev',
    age: 23,
    school: 'MG',
    gpa: 5.5,
};

function printStudentInfo(student: FullStudent) {
    console.log(`Student ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);
}

let min4oPerson: Person = {
    id: 2,
    firstName: 'Min4o',
    lastName: 'Min4ev',
    age: 23,
};

printStudentInfo(danielPerson);