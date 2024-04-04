"use strict";
var LaptopType;
(function (LaptopType) {
    LaptopType[LaptopType["Dell"] = 0] = "Dell";
    LaptopType[LaptopType["Hp"] = 1] = "Hp";
    LaptopType[LaptopType["Apple"] = 2] = "Apple";
})(LaptopType || (LaptopType = {}));
console.log(LaptopType.Dell);
