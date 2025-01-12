
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    display() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    }
    getKeys() {
        return Object.keys(this);
    }
    getEntries() {
        return Object.entries(this);
    }
    freezeObject() {
        Object.freeze(this);
    }
    sealObject() {
        Object.seal(this);
    }
    checkProperty(property) {
        return this.hasOwnProperty(property);
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// book1.display();
// book2.display();

// console.log(book1.getKeys());
// console.log(book1.getEntries());
console.log(book1.checkProperty("author"));// check propery exist o nit 
console.log(book2.checkProperty("publisher"));

// book1.freezeObject();
// book1.title = "Changed Title";
// console.log(book1);

// book2.sealObject();
// book2.newProperty = "Not Allowed";
// book2.year = 1961;
// console.log(book2);
