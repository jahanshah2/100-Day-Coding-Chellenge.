"use strict";
function replaceFruit(arr) {
    const index = arr.indexOf("Mango");
    if (index !== -1) {
        arr[index] = "Banana";
    }
}
const fruits = ["Apple", "Oranges", "Strawberry", "Banana"];
replaceFruit(fruits);
console.log(fruits);
