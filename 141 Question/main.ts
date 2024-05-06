async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
  }
  
  // Define fetchSomething function to simulate fetching data asynchronously
  function fetchSomething() {
    // Simulating an asynchronous operation with setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Simulated Data");
      }, 2000); // Resolves after 2 seconds
    });
  }
  
  // Call the fetchData function
  fetchData();
  
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );   