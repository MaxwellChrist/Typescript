var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateSomething(message, code) {
    throw { message: message, errorCode: code };
}
generateSomething("An error occurred!", 500);
