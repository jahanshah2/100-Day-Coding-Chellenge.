"use strict";
let grades = [55, 67, 23, 56, 89];
let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(average);
