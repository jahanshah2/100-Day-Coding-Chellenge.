"use strict";
function averageCalculator(...scores) {
    let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    console.log(average);
}
averageCalculator(1, 2, 3, 4, 5, 6, 7, 8, 9);
