"use strict";
let guests = ["Jahan", "Waseem", "Ameen alam", "shahzaib"];
guests.unshift("Hakim");
guests.splice(2, 0, "Faheem");
guests.push("Waheed");
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
