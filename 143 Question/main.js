"use strict";
const conditionalPromise = new Promise((resolve, reject) => {
    let condition = Math.random() > 0.5;
    if (condition) {
        resolve("File Successfully exicuted");
    }
    else {
        reject(new Error("File Not Exicute!"));
    }
});
conditionalPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
