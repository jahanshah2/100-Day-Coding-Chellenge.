"use strict";
function calculateSum(nums) {
    return nums.reduce((resev, curr) => resev + curr, 0);
}
const numbers = [34, 45, 1, 5, 20, 70];
const sum = calculateSum(numbers);
console.log(sum);
