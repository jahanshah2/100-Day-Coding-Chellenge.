"use strict";
const countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
countries.set("Pakistan", "Islamabad");
console.log(countries);
countries.forEach(element => {
    console.log(element);
});
