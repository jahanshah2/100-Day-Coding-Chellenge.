function isLeapYear(year: number): boolean {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log(isLeapYear(2020)); // Outputs: true
  console.log(isLeapYear(1900)); // Outputs: false