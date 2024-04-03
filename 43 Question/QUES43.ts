let magicians: string[] = ["David Copperfield", "Harry Houdini", "David Blaine", "Criss Angel", "Lance Burton"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
  function make_great(magicians: string[]) {
      return magicians.map( magician => `${magician} the great`);
  }
  
  let origionalArr: string[] = [...magicians];
  
  let great_magicians = make_great(origionalArr);
  
  show_magicians(origionalArr);
  
  show_magicians(great_magicians);