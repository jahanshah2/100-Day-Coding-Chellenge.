let current_users: string[] = ["babar", "admin", "naveed", "noman", "faraz"];
let new_users: string[] = ["shabeer", "bilal", "hamza", "admin", "shadab"];

new_users.forEach((newUser) => {
    if (current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )

    ) {
       console.log(`${newUser} Will need to enter new user`);
        
    }else{
        console.log(`${newUser} is available`);
        
    }

    

});
