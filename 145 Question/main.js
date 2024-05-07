"use strict";
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
executeCallback(add, 10, 20);
