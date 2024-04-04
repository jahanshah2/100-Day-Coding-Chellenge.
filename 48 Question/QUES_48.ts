let laptop1Price: number[] = [25000, 2000, 1000000];
let laptop2Price: number[] = [52000, 29000, 60000];

let bothPrices: number[] = [...laptop1Price, ...laptop2Price].sort((a, b) => a - b);
console.log(bothPrices);