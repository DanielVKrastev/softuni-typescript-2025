// ! Generic type constraints

function logItemId<T extends { id: number }>(item: T): void {
    console.log(item);
}

//logItemId('pen40');
//logItemId(23);
//logItemId({ name: 'pencho' });
logItemId({ id: 2, name: 'Daniel', age: 23 });
logItemId({ id: 2, email: 'Daniel@gmail.com' });
