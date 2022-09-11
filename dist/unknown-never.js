"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateSomething(message, code) {
    throw { message: message, errorCode: code };
}
generateSomething("An error occurred!", 500);
//# sourceMappingURL=unknown-never.js.map