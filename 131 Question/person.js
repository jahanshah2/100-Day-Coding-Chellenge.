"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    name;
    constructor(name) {
        this.name = name;
    }
    great() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
exports.person = person;
