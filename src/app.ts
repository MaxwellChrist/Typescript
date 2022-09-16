const names: Array<string | number> = ["Max", "Andy"]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done")
    }, 2000)
})

promise.then(data => {
    data.split(' ')
})

function mergeObjs<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA!, objB)
}

const merged = mergeObjs({name: "Max"}, {age: 31})

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let description = "Got no value"
    if (element.length === 1) {
        description = "Got 1 element"
    } else if (element.length > 1) {
        description = "Got " + element.length + " elements"
    }
    return [element, description]
}

console.log(countAndPrint("Hi there!"))
console.log(countAndPrint([]))
console.log(countAndPrint(["Sports", "Cooking"]))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value: " + obj[key]
}

console.log(extractAndConvert({name: "Melissa"}, "name"))

class DataStorage <T extends string | number | boolean>{
    private data: T[] = []
    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max")
textStorage.addItem("Ali")
textStorage.removeItem("Max")
console.log(textStorage.getItems())

const numberStorate = new DataStorage<number>()

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

function createCourseGoal(title: string, description:string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

const babyNames: Readonly<string[]> = ["Leo", "Danny"]
// babyNames.push("Sally")
// babyNames.pop()

