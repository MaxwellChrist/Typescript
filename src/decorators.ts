function Logger(logString: string) {
    console.log("firing Logger Decorator")
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookID: string) {
    console.log("firing withTemplate Decorator")
    return function<T extends {new(..._: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[])  {
                super()
                const element = document.getElementById(hookID)
                if (element) {
                    element.innerHTML = template
                    element.querySelector("h1")!.textContent = this.name
                }
            }
        }
    }
}

@Logger("Logging...")
@WithTemplate("<h1>My Person Object</h1>", "app")

class FindSomeone {
    name = "Jeff";
    constructor() {
        console.log("creating findSomeone object...")
    }
}

const someone = new FindSomeone()
console.log(someone)

function Log(target: any, propertyName: string | symbol) {
    console.log("Property decorator")
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator")
    console.log(target, name, descriptor)
}

function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log("Method decorator")
    console.log(target, name, descriptor)
}

function Log4(target: any, name: string | symbol, position: number) {
    console.log("Parameter decorator")
    console.log(target, name, position)
}

class Product {
    @Log
    title: string;
    private _price: number

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error("Invalid price - should be positive")
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}