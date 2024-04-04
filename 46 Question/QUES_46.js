"use strict";
const laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function (make, year) {
        console.log(`This laptop is a ${this.year = year} ${this.make = make} ${this.model}.`);
    }
};
laptop.describe("Hp", 2024);
