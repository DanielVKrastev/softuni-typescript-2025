type Employee = {
    name: string;
    age: number;
    salary: number;
};

type Product = {
    title: string;
    price: number;
    inStock: boolean;
    rating: number;
};

/*
name: never;
age: 'age';
salary: 'salary';
*/

type GetNumericKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type EmployeeNumericKeys = GetNumericKeys<Employee>;
type ProductNumericKeys = GetNumericKeys<Product>;
