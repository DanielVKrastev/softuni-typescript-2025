let test = { name: 'Pesho', age: 20 };

console.log(test.name);
type a = typeof test;
type b = keyof typeof test;
type c = {
    [k in keyof typeof test]: typeof test[k]
};