"use strict";
function combine(input1, input2, resultType) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") || resultType === "num") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " loves " + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 34, "num");
console.log(combinedAges);
const combinedAgesStr = combine("30", "34", "num");
console.log(combinedAgesStr);
const combinedNames = combine("Jeff", "Anna", "str");
console.log(combinedNames);
//# sourceMappingURL=aliases.js.map