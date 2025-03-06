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
            val.forEach((v) => {
                console.log(v);
            });
        }
        else if (typeof val === "string") {
            console.log(val);
        }
    }
}
