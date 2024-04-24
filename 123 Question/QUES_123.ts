function userName(name:string,): void {
    const vowels:string[] =[name] ;
    for (const char of name) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break;
      }
      console.log(char); 
    }
  }
  
  userName("jahanShah")