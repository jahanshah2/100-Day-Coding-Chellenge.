"use strict";
const words = ["India", "Pakistan", "angladesh", "China"];
// Uses .map() to create a new array with the length of each word
const lengths = words.map(word => word.length);
console.log(lengths); // Outputs: [ 5, 8, 9, 5 ]
