function add2(n1: number, n2: number) {
    return n1 + n2
}

function printSomething(num: number): void {
    console.log("Result: " + num)
}

function addSomethingElse(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2
    cb(result)
}

printSomething(add2(5,4))

let combinedVals: (a: number, b: number) => number
combinedVals = add2
console.log(combinedVals(8,5))

addSomethingElse(10, 20, (result) => {
    console.log(result)
})