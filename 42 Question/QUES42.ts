let magicians: string[] = ["David Copperfield", "Harry Houdini", "David Blaine", "Criss Angel", "Lance Burton"];
function show_magicians(magicians: string[]){
    magicians.forEach((magician) =>{
        console.log(magician);
    })
}

show_magicians(magicians);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); 
show_magicians(magicians); 