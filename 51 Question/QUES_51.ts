function rectangleArea(length: number, width: number): number{
    return length * width;
}

let rectangleAreaArrow = (length: number, width: number) => length * width;

console.log(rectangleAreaArrow(6,8));