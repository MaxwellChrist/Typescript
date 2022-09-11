let userInput: unknown;
let userName: string

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
    userName = userInput
}

function generateSomething(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateSomething("An error occurred!", 500)