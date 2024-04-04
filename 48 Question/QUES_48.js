"use strict";
let laptop1Price = [25000, 2000, 1000000];
let laptop2Price = [52000, 29000, 60000];
let bothPrices = [...laptop1Price, ...laptop2Price].sort((a, b) => a - b);
console.log(bothPrices);
