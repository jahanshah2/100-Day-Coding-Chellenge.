"use strict";
let promis = new Promise((resolve) => {
    setTimeout(() => {
        throw new Error;
        resolve("Hellow World");
    }, 2000);
});
promis.then((resol) => {
    console.log(resol);
});
