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
        console.log(Dept2.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
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
Dept2.fiscalYear = 2020;
const marketing = new Dept2("Marketing", 1);
marketing.addEmployee("Max");
marketing.addEmployee("Sam");
marketing.describe();
marketing.printEmployeeInfo();
const employee1 = Dept2.createEmployee("Lisa");
console.log(employee1);
console.log(Dept2.fiscalYear);
console.log(marketing);
class Recreactional {
    constructor(name, YoE) {
        this.name = name;
        this.YoE = YoE;
        this.employees = [];
        console.log(Dept2.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Recreactional.fiscalYear = 2020;
class ITDept extends Recreactional {
    constructor(name, YoE, admins) {
        super(name, YoE);
        this.admins = admins;
    }
    describe() {
        console.log(Recreactional.name + " department is being combined with: " + this.name);
    }
}
class AccountingDept extends Recreactional {
    constructor(name, YoE, reports) {
        super(name, YoE);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDept("Accounting", 1.5, []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
    describe() {
        console.log(ITDept.name + " is being combined with: " + this.name);
    }
}
const IT = new ITDept("IT", 3, ["Max"]);
IT.addEmployee("Joe");
IT.addEmployee("Ali");
IT.describe();
IT.printEmployeeInfo();
console.log(IT);
const accounting = AccountingDept.getInstance();
const accounting2 = AccountingDept.getInstance();
console.log(accounting, accounting2);
// console.log(accounting.mostRecentReport)
accounting.mostRecentReport = "Year end report";
accounting.addEmployee("Max");
accounting.addEmployee("Emily");
accounting.addEmployee("Brad");
accounting.printEmployeeInfo();
accounting.addReport("Marketing budget");
console.log(accounting);
accounting.describe();
//# sourceMappingURL=app.js.map