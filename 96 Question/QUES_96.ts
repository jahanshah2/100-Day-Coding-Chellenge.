function calculateSum(nums: number[]): number {
    return nums.reduce((resev, curr) => resev + curr, 0);
}
const numbers: number[] = [34, 45, 1, 5 , 20, 70];
const sum = calculateSum(numbers)

console.log(sum);