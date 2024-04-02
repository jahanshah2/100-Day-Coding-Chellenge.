"use strict";
let fruitsName = "apple";
// ```typescript
// // Equality with strings
console.log("Testing equality with strings:");
console.log(fruitsName == "apple"); // True
console.log(fruitsName == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("APPLE".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(100 < 70); // false
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("Strawberry")); // True
