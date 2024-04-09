"use strict";
function findYourLuckyNumber(score) {
    if (score >= 90) {
        return 10;
    }
    else if (score >= 80) {
        return 20;
    }
    else if (score >= 70) {
        return 30;
    }
    else if (score >= 60) {
        return 40;
    }
    else {
        return 50;
    }
}
console.log(findYourLuckyNumber(90)); // Outputs: 10
console.log(findYourLuckyNumber(65)); // Outputs: 40
