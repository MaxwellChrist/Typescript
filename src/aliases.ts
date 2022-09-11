type TypeAliasExample = number | string
type TypeAliasExample2 = "str" | "num"

function combine(input1: TypeAliasExample, input2: TypeAliasExample, resultType: TypeAliasExample2) {
    let result
    if ((typeof input1 === "number" && typeof input2 === "number") || resultType === "num") {
        result = +input1 + +input2
    } else {
        result = input1.toString() + " loves " + input2.toString()
    }
    return result
}

const combinedAges = combine(30, 34, "num")
console.log(combinedAges)

const combinedAgesStr = combine("30", "34", "num")
console.log(combinedAgesStr)

const combinedNames = combine("Jeff", "Anna", "str")
console.log(combinedNames)