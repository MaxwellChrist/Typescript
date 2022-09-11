"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        throw new Error("Incorrect Input");
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map