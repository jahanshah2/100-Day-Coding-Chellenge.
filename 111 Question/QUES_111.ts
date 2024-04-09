function categorizeAge(age: number): string {
    if (age < 13) {
      return "child";
    } else if (age <= 19) {
      return "teenager";
    } else {
      return "adult";
    }
  }
  
  console.log(categorizeAge(12)); // Outputs: child
  console.log(categorizeAge(18)); // Outputs: teenager
  console.log(categorizeAge(25)); // Outputs: adult