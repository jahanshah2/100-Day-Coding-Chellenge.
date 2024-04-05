function multiplyDecimal(num1: number, num2: number): number {
    return Math.round((num1 * num2) * 100) / 100;
}

console.log(multiplyDecimal(5.1419, 3.71));