"use strict";
function orderSandwich(items) {
    console.log("Sandwich Summary:");
    items.forEach((item, idx) => {
        console.log(`${idx + 1}- ${item}`);
    });
}
orderSandwich(["whole wheat", "turkey", "lettuce", "tomato", "mayo"]);
orderSandwich(["rye", "ham", "swiss cheese", "pickle"]);
