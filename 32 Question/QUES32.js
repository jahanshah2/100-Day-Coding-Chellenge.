"use strict";
let current_users = ["babar", "admin", "naveed", "noman", "faraz"];
let new_users = ["shabeer", "bilal", "hamza", "admin", "shadab"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} Will need to enter new user`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
