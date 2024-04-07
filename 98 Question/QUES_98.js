"use strict";
const calculateDaysUntilNewYear = () => {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const oneDay = 1000 * 60 * 60 * 34;
    const dayLeft = Math.ceil((newYear.getTime() - today.getTime()) / oneDay);
    return dayLeft;
};
const daysUntilNewYear = calculateDaysUntilNewYear();
console.log(`There are ${daysUntilNewYear} days left until New Year.`);
