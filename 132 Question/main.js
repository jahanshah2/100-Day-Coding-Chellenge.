"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const calculator_1 = __importDefault(require("./calculator"));
let myData = new calculator_1.default("jahan shah", 22);
myData.great();
console.log((0, utils_1.utilOne)(20, 10));
console.log((0, utils_1.utilTwo)(30, 10));
