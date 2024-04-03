function makeShirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

makeShirt(); 
makeShirt("medium"); 
makeShirt("small", "Dive into Coding"); 