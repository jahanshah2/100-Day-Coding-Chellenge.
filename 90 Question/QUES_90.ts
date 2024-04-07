function checkIfNaN(value: any): boolean {
    return isNaN(value);
}

console.log(checkIfNaN(20)); // Output: false
console.log(checkIfNaN(NaN)); // Output: true because NaN is a number type
console.log(checkIfNaN("Jahan Shah")); // Output: true