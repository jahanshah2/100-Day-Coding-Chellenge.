function orderSandwich(items:string[]){
    console.log("Sandwich Summary:");
    items.forEach((item: string, idx: number) => {
        console.log(`${idx + 1}- ${item}`);
    })
}

orderSandwich(["whole wheat", "turkey", "lettuce", "tomato", "mayo"]);
orderSandwich(["rye", "ham", "swiss cheese", "pickle"]);
