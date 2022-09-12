"use strict";
const rester = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
};
const addRester = rester(5, 10, 15, 20, 25);
console.log(addRester);
//# sourceMappingURL=app.js.map