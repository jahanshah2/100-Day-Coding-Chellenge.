function findPosition(str: string): number {
    return str.indexOf("code");
}

let position = findPosition("Learn to code with TypeScript ")
console.log(position);