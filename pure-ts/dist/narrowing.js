"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        return "No id provided";
    }
    return id;
}
console.log(provideId("Abc"));
function printAll(val) {
    if (val) {
        if (typeof val === "object") {
            val.map((v) => {
                console.log(v);
            });
        }
        else if (typeof val === "string") {
            console.log(val);
        }
    }
}
// in operator for narrowing
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceof operator for narrowing
function check(x) {
    if (x instanceof Date) {
        return x.getHours();
    }
    return x.toUpperCase();
}
console.log(check(new Date()));
function move(pet) {
    return pet.swim() !== undefined;
}
function getFood(pet) {
    if (move(pet)) {
        pet;
        return "Fish Food";
    }
    return "Bird Food";
}
