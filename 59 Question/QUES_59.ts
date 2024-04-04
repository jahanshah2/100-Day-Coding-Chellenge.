function customAdder(specialNum: number){
    return function addNum(num: number){
        return specialNum + num;
    }
}

const adder1 = customAdder(4);
console.log(adder1(4));

const adder2 = customAdder(-4);
console.log(adder2(7)); 