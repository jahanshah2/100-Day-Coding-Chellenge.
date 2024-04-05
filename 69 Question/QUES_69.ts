function divideWithRemainder(divident: number, divisor: number): { quotient: number, remainder: number } {
    const quotient =  Math.floor(divident / divisor);
    const remainder = divident % divisor;
    return { quotient, remainder}; 
}

const result = divideWithRemainder(7, 4);

console.log(result);