function getFirstElement<ElementType>(arr: ElementType[]): ElementType {
    return arr[0];
}

/*
function getFirstNumElement(arr: number[]): number {
    return arr[0];
}
*/
const firstlEl = getFirstElement<string>(['test', 'daniel']);
console.log(firstlEl.length);

const firstNumEl = getFirstElement<number>([45, 123, -12]);
console.log(firstNumEl.toFixed(2));
