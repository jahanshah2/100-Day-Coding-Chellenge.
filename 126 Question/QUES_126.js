"use strict";
const myObject = {
    property: "30",
    outerMethod: function () {
        console.log(this.property); // Works as expected, logs "Value"
        const innerMethod = () => {
            console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.outerMethod();
