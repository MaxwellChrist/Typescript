"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// autobind decorator
function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class ProjectInput {
    constructor() {
        this.template = document.getElementById("project-input");
        this.host = document.getElementById("app");
        const importedNode = document.importNode(this.template.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.title = this.element.querySelector("#title");
        this.description = this.element.querySelector("#description");
        this.people = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    gatherInput() {
        const enteredTitle = this.title.value;
        const enteredDescription = this.description.value;
        const enteredPeople = this.people.value;
        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
            return console.log("Invalid inputs...please try again");
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.title.value = "";
        this.description.value = "";
        this.people.value = "";
    }
    onSubmit(e) {
        e.preventDefault();
        const input = this.gatherInput();
        if (Array.isArray(input)) {
            const [title, desc, ppl] = input;
            console.log(title, desc, ppl);
            this.clearInputs();
        }
        console.log(this.title.value);
    }
    configure() {
        // the autobind decorator above removes the need for the below code
        // this.element.addEventListener('submit', this.onSubmit.bind(this))
        this.element.addEventListener('submit', this.onSubmit);
    }
    attach() {
        this.host.insertAdjacentElement("afterbegin", this.element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "onSubmit", null);
const projectInput1 = new ProjectInput();
//# sourceMappingURL=app.js.map