"use strict";
let adder;
adder = (n1, n2) => n1 + n2;
let adder2;
class Person {
    constructor(constructorName, constructorAge) {
        this.age = 55;
        this.name = constructorName;
        if (constructorAge) {
            this.age = constructorAge;
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
    AddFn2(a, b) {
        return a + b;
    }
}
let user1;
user1 = new Person("Max");
user1.greet("Hello there, I am");
console.log(user1);
let user2;
user2 = new Person("Joe", 33);
user2.greet("Goodbye");
console.log(user2);
//# sourceMappingURL=interface.js.map