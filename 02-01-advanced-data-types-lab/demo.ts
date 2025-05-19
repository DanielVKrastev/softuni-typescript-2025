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

// custom type + intersection
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

// keyof
type Point = {
    x: number;
    y: number;
};

type PartialPoint = {
    [K in keyof Point]?: Point[K] // ?optional
};

let partialOriginPoint: PartialPoint = {
    x: 4
}

type KeysOfPoint = keyof Point; // x | y

let originPoint: Point = {
    x: 0,
    y: 0
};

function changeCoordinate(point: Point, coordinateName: keyof Point, newValue: number){
    point[coordinateName] = newValue;
}

changeCoordinate(originPoint, 'x', 5);
console.log(originPoint);


//--------
type TreeNode = {
    value: number;
    leftChild?: TreeNode;
    rightChild?: TreeNode;
}

const leftLeaf: TreeNode = {
    value: 5
}

const rightLeaf: TreeNode = {
    value: 10
}

const root: TreeNode = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf,
}

console.log(root);
