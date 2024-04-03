let num:number [] =[1,2,3,4,5,6,7,8];

for (let i = 0; i < num.length; i++) {
    if (num[i] == 1)  {
        console.log(`${num[i]}st`);
    }else if (num[i] == 2)  {
        console.log(`${num[i]}nd`);
    }else if (num[i] == 3)  {
        console.log(`${num[i]}rd`);
    }else if (num[i] == 4)  {
        console.log(`${num[i]}th`);
    }else if (num[i] >= 5 &&  num[1] <= 6 )  {
        console.log(`${num[i]}th`);
    }else if (!(7 > num[i]) || num[i] < 6)  {
        console.log(`${num[i]}th`);
    }else if (num[i] == 7)  {
        console.log(`${num[i]}th`);
    }else{
        console.log(`${num[i]}th`);
        
    }    
}