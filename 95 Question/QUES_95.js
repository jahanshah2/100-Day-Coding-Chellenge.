"use strict";
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 2);
}
// Example: Filtering an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(filterGreaterThanTen(numbers)); // Outputs: [3, 4, 5, 6, 7]
// The new array contains only the numbers that are greater than 10.
