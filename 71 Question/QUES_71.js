"use strict";
let age = 17;
age = 18;
console.log("Updated age (let):", age); // Output: 18
let pi = 3.142;
try {
    pi = 3.214;
}
catch (error) {
    console.error("Error caught while reassigning const variable:", error);
}
