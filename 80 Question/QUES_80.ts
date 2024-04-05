interface Car {
    make: string;
    model: string;
    year: number;
    color?: string; 
}

let car: Car = {
    make: 'HONDA',
    model: 'CIVIC',
    year: 2023
};



console.log(car);