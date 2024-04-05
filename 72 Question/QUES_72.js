"use strict";
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
let age = 20; // Global variable
{
    let age = 20; // Variable with block scope
    const NUM = 2.90; // Constant with block scope
    console.log("Inside the block:");
    console.log(`Age: ${age}`); // Output: 30
    console.log(`NUM: ${NUM}`); // Output: 3.14
}
console.log("Outside the block:");
console.log(`Age: ${age}`); // Output: 25
console.log(`NUM: ${NUM}`); // Error: Cannot find name 'pi'
