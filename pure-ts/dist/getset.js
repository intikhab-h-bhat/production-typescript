"use strict";
class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._name = '';
        this._age = 0;
        this._count = 0;
    }
    get customerCount() {
        return this._count;
    }
    set customerCount(value) {
        this._count = value;
    }
}
class FamilyMember extends Customer {
    constructor() {
        super(...arguments);
        this.isFamilyMember = true;
    }
    changeCustomerCount() {
        this._count = 10;
    }
}
const customer = new Customer('John', 25);
// customer.customerCount=10;
const family = new FamilyMember('John', 25);
console.log(customer);
console.log(family);
