let firstName: string = 'Daniel';
let lastName: string = 'Krastev';
let age: number = 23;
let hasGraduated: boolean = false;
let skills: string[] = ['JS', 'HTML', 'TS'];

let certificateInfo: [string, number, boolean] = [
    'MySQL',
    2025,
    true
];

let strNumberArr: Array<number | string> = [
     1,
     '1'
];

let strNumArr2: (string | number)[] = [
     1,
     '1'
];
hasGraduated = true;



/******************************************************************/

enum Directions {
    Up,
    Down,
    Left,
    Right
};

function movePoint(point: { x: number, y: number }, moveDirection: Directions){
    if(moveDirection === Directions.Up) {
        return { x: point.x, y: point.y + 1 };
    } else if(moveDirection === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    } else if(moveDirection === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    } else if(moveDirection === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
};

let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Right));

/******************************************************************/
function greetUser(username: string, addHello?: boolean) {
    
    if(addHello) {
        return `Hello, ${username}`;
    }

    return username;

};

console.log(greetUser('Daniel', false));


/******************************************************************/
function isNumber(val: string | number): val is number{
    return typeof val === 'number';
};

function formatData (a: string | number, b: string | number) {
    if(isNumber(a) && isNumber(b)){
        console.log(a + b);
    }else{
        console.log(`${a} --- ${b}`);
        
    }
};

console.log(formatData(1, 2));
