class Product {
    private static _productCount: number = 0;
    public readonly id: number;
    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        Product._productCount++;
        this.id = Product.productCount;
    }

    public static get productCount(): number {
        return Product._productCount;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length < 1) throw new Error('Name must contain at least 1 character');
        this._name = newName;
    }

    get price() {
        return this._price;
    }

    set price(newPrice: number) {
        if (newPrice < 0) throw new Error('Price must be positive');
        this._price = newPrice;
    }

    public getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public listProducts(): string {
        let productListString = '';
        this.products.forEach(product => {
            productListString += product.getDetails() + '\n';
        })
        const totalProductsString = `Total products created: ${this.products.length}`;
        return productListString + totalProductsString;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());

/*
Product.productCount = 10;
const product = new Product("", 800);
const product2 = new Product("Phone", 0);
product.id = 5;
*/