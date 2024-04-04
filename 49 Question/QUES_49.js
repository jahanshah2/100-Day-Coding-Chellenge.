"use strict";
function myHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
myHobbies("problem solving", "coding", "cycling");
