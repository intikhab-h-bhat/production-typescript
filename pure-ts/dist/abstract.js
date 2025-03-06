"use strict";
class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTotalPhotos() {
        return 0;
    }
}
class Fiction extends Books {
    constructor(title, author, price) {
        super(title, author);
    }
    getBookDetails() {
        return `The book ${this.title} is written by ${this.author}`;
    }
    getTotalPhotos() {
        return 20;
    }
}
const fiction1 = new Fiction('The Alchemist', 'Paulo Coelho', 500);
console.log(fiction1.getBookDetails(), fiction1.getTotalPhotos());
