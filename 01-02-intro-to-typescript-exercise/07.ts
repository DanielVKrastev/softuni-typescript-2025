function unknowResponse(argument: unknown) : string {
    if('value' in (argument as any) && typeof (argument as any).value === 'string'){
        return (argument as any).value;
    }

    return '-';
}

console.log(unknowResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknowResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknowResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(unknowResponse({ code: 201, text: 'Created', value: 'Object Created' }));