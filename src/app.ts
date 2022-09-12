type AddFn = (a: number, b: number) => number
let adder: AddFn
adder = (n1: number, n2: number) => n1 + n2

interface AddFn2 {
    (a: number, b: number): number
}
let adder2: AddFn2

interface Named {
    readonly name: string;
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name: string
    age= 55;

    constructor(constructorName: string, constructorAge?: number) {
        this.name = constructorName
        if (constructorAge) {
          this.age = constructorAge
        }
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name)
    }

    AddFn2(a: number, b: number) {
        return a + b
    }

}

let user1: Greetable
user1 = new Person("Max")
user1.greet("Hello there, I am")
console.log(user1)
let user2: Greetable
user2 = new Person("Joe", 33)
user2.greet("Goodbye")
console.log(user2)