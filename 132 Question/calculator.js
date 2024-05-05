"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class mySelf {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    great() {
        return console.log(`My Name Is ${this.name} and My Age is ${this.age} years`);
    }
    ;
}
exports.default = mySelf;
