"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
//book.title = "Brave New World"; //only read, no write
//book.author = "Terry Pratchet";
//# sourceMappingURL=08.js.map