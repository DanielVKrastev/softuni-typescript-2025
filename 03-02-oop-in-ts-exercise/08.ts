class Book {
    public readonly title: string;
    public readonly author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
/*
    public test(): void{
        this.title = 'Daniel';
    }
*/

}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
//book.title = "Brave New World"; //only read, no write
//book.author = "Terry Pratchet";
