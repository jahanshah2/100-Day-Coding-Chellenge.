interface CART{
    name:string
    model:number
    color:string
}

class CARS implements CART {
    name:string
    model:number
    color:string
    constructor(name:string,model:number,color:string) {
        this.name = name
        this.model = model
        this.color = color
    }
}

const CAR1 = new CARS("HONDA",2022,"BLACK")

console.log(CAR1);
