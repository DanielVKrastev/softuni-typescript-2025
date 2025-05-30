// ! Generic Iterfaces

interface Message<T> {
    sender: string;
    recipient: string;
    data: T
};

const message1: Message<string> = {
    sender: 'daniel',
    recipient: 'anna',
    data: 'Hiii'
};

const message2: Message<{ text: string, timestamp: number}> = {
    sender: 'daniel',
    recipient: 'anna',
    data: { text: 'Hi whats up', timestamp: 412133317 }
};

console.log(message1.data.length);
console.log(message2.data.text);
