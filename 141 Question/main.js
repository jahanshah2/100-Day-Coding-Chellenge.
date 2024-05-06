"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Assuming fetchSomething returns a Promise
        const data = yield fetchSomething();
        console.log(data);
        // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
    });
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
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
