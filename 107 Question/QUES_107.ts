function isDivisibleByTwoAndThree(number: number): boolean {
    // Uses the modulo operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
  }
  
  console.log(isDivisibleByTwoAndThree(18)); // Outputs: true
  console.log(isDivisibleByTwoAndThree(14)); // Outputs: false