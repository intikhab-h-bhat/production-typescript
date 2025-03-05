"use strict";
// class User{
//     name: string;
//     age: number;
//     private city: string='Bangalore';
//     constructor(abc:string,xyz:number){
//         this.name = abc;
//         this.age = xyz;
//     }
// }
// const User1=new User('John',25);
// //User1.city='Mumbai';
// console.log(User1);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.city = 'Bangalore';
    }
}
const user = new User('John', 25);
console.log(user);
