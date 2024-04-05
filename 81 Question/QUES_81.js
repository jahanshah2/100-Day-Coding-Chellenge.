"use strict";
function logObjectProperties(obj) {
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
logObjectProperties({ make: 'Ford', model: 'Mustang', year: 2021, color: "Shadow Black" });
