const rester = (...nums: number[]) => {
    return nums.reduce((a, b) => a + b, 0)
}
const addRester = rester(5, 10, 15, 20, 25)
console.log(addRester)

class Dept {
    name: string;
    constructor(n: string) {
        this.name = n
    }
    describe(this: Dept) {
        console.log("Department: " + this.name)
    }
}
const security = new Dept("Security")
security.describe()
const securityCopy = { name: "copy", describe: security.describe }
securityCopy.describe()

class Dept2 {
    private employees: string[] = []
    constructor(private name: string, private readonly YoE: number) {}
    describe(this: Dept2) {
        console.log("Department: " + this.name + ". Years of experience: " + this.YoE)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}
const marketing = new Dept2("Marketing", 1);
marketing.addEmployee("Max");
marketing.addEmployee("Sam");
marketing.describe()
marketing.printEmployeeInfo()