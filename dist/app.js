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
//# sourceMappingURL=app.js.map