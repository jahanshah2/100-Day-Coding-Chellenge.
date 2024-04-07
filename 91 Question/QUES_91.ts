function isValueNaN(value: any): boolean {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}


console.log(isValueNaN("hello World")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(96969)); // Outputs: false, because 96969 is a number