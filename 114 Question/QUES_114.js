"use strict";
const students = new Map();
students.set(1, "Farhan");
students.set(2, "Rajo");
students.set(3, "Rancho");
// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
