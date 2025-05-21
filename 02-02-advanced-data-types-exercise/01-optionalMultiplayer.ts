function multiply(
    param1?: string | number, 
    param2?: string | number, 
    param3?: string | number
){
    let number1 = param1 == null || undefined ? 1 : Number(param1);
    let number2 = param2 == null || undefined ? 1 : Number(param2);
    let number3 = param3 == null || undefined ? 1 : Number(param3);
    return number1 * number2 * number3;
}

console.log(multiply('3', 5, '10'));
console.log(multiply('3', undefined, '10'));
console.log(multiply('3', 2, undefined));
console.log(multiply('2','2'));
