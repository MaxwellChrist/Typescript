const rester = (...nums: number[]) => {
    return nums.reduce((a, b) => a + b, 0)
}

const addRester = rester(5, 10, 15, 20, 25)
console.log(addRester)

