function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); // Removes and returns the last element of the array
}

// Example: Removing the last fruit from the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']