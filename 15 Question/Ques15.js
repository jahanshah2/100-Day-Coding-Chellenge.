"use strict";
let guests = ["Jahan", "Waseem", "Ameen alam", "shahzaib"];
console.log("great news' I found to bigger dinner table");
guests.unshift("Hakim");
guests.splice(2, 0, "Faheem");
guests.push("Waheed");
guests.forEach(guest => {
    console.log(`Dear ${guest} I am invoit to you ! I found bigger dinner table so please accepte my invitation "Thank You"`);
});
