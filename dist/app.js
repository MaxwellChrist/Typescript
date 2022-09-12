"use strict";
const rester = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
};
const addRester = rester(5, 10, 15, 20, 25);
console.log(addRester);
class Dept {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const security = new Dept("Security");
security.describe();
const securityCopy = { name: "copy", describe: security.describe };
securityCopy.describe();
class Dept2 {
    constructor(name, YoE) {
        this.name = name;
        this.YoE = YoE;
        this.employees = [];
    }
    describe() {
        console.log("Department: " + this.name + ". Years of experience: " + this.YoE);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const marketing = new Dept2("Marketing", 1);
marketing.addEmployee("Max");
marketing.addEmployee("Sam");
marketing.describe();
marketing.printEmployeeInfo();
//# sourceMappingURL=app.js.map