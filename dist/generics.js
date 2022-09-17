"use strict";
const names = ["Max", "Andy"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
function mergeObjs(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = mergeObjs({ name: "Max" }, { age: 31 });
function countAndPrint(element) {
    let description = "Got no value";
    if (element.length === 1) {
        description = "Got 1 element";
    }
    else if (element.length > 1) {
        description = "Got " + element.length + " elements";
    }
    return [element, description];
}
console.log(countAndPrint("Hi there!"));
console.log(countAndPrint([]));
console.log(countAndPrint(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Melissa" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Ali");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorate = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const babyNames = ["Leo", "Danny"];
// babyNames.push("Sally")
// babyNames.pop()
//# sourceMappingURL=generics.js.map