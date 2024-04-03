"use strict";
let magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Criss Angel", "Lance Burton"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
