// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 2);
}

// Example: Filtering an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(filterGreaterThanTen(numbers)); // Outputs: [3, 4, 5, 6, 7]
// The new array contains only the numbers that are greater than 10.