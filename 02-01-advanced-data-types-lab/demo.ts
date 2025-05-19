function printGreeting(text: string | string[]): void { //union type
    if(typeof text === 'string'){
        console.log(text);
    }else{
        console.log(text.join(' '));
    }
    
}

printGreeting('Hello, Daniel');
printGreeting(['Hello', 'its', 'me']);