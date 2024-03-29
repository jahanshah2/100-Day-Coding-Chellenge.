"use strict";
let guests = ["Waseem", "Noman", "Jaweed"];
guests.splice(0, 1, "Ali");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
