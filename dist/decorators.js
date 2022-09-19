"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log("firing Logger Decorator");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookID) {
    console.log("firing withTemplate Decorator");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const element = document.getElementById(hookID);
                if (element) {
                    element.innerHTML = template;
                    element.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let FindSomeone = class FindSomeone {
    constructor() {
        this.name = "Jeff";
        console.log("creating findSomeone object...");
    }
};
FindSomeone = __decorate([
    Logger("Logging..."),
    WithTemplate("<h1>My Person Object</h1>", "decorator-div")
], FindSomeone);
const someone = new FindSomeone();
console.log(someone);
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target, name, descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target, name, descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator");
    console.log(target, name, position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=decorators.js.map