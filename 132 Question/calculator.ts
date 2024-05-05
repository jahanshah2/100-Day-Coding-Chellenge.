export default class mySelf {
    name:string
    age: number
    constructor(name:string,age:number){
        this.name = name
        this.age  = age
    }

    great(){
        return console.log(`My Name Is ${this.name} and My Age is ${this.age} years`);
        
    };
    
  }