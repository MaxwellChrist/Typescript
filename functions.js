"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printSomething(num) {
    console.log("Result: " + num);
}
function addSomethingElse(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printSomething(add2(5, 4));
let combinedVals;
combinedVals = add;
console.log(combinedVals(8, 5));
addSomethingElse(10, 20, (result) => {
    console.log(result);
});
