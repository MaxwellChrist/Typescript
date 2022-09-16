const names: Array<string | number> = ["Max", "Andy"]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done")
    }, 2000)
})

promise.then(data => {
    data.split(' ')
})

function mergeObjs<T,U>(objA: T, objB: U) {
    return Object.assign(objA!, objB)
}

const merged = mergeObjs({name: "Max"}, {age: 31})