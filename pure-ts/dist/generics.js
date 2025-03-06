"use strict";
let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];
function identityone(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
function identitythree(val) {
    return val;
}
//Generic function
function identityfour(val) {
    return val;
}
function identityfive(val) {
    return val;
}
console.log(identityfive({ name: 'Ironman', power: 'suit' }));
function productSearch(products) {
    let product1 = 3;
    return products[3];
}
console.log(productSearch(["A", "2", "3", "D", "5"]));
const setProduct = (prod) => {
    return prod[0];
};
console.log(setProduct(["A", "2", "3", "D", "5"]));
function anotherIdentity(valu1, value2) {
    return {
        valu1, value2
    };
    anotherIdentity(3, { "connection": "localhost", "username": "root", "password": "root" });
}
class Products {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
}
