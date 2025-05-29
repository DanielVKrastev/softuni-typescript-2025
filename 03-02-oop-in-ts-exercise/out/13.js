"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    static _productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product._productCount++;
        this.id = Product.productCount;
    }
    static get productCount() {
        return Product._productCount;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length < 1)
            throw new Error('Name must contain at least 1 character');
        this._name = newName;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice < 0)
            throw new Error('Price must be positive');
        this._price = newPrice;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
class Inventory {
    products;
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        let productListString = '';
        this.products.forEach(product => {
            productListString += product.getDetails() + '\n';
        });
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
//# sourceMappingURL=13.js.map