// autobind decorator
function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}


class ProjectInput {
    template: HTMLTemplateElement
    host: HTMLDivElement
    element: HTMLFormElement
    title: HTMLInputElement
    description: HTMLInputElement
    people: HTMLInputElement

    constructor() {
        this.template = document.getElementById("project-input") as HTMLTemplateElement
        this.host = document.getElementById("app") as HTMLDivElement

        const importedNode = document.importNode(this.template.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.element.id = "user-input"

        this.title = this.element.querySelector("#title") as HTMLInputElement
        this.description = this.element.querySelector("#description") as HTMLInputElement
        this.people = this.element.querySelector("#people") as HTMLInputElement

        this.configure()
        this.attach()
    }

    private gatherInput(): [string, string, number] | void {
        const enteredTitle = this.title.value
        const enteredDescription = this.description.value
        const enteredPeople= this.people.value

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0 ) {
            return console.log("Invalid inputs...please try again")
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople]
        }
    }

    private clearInputs() {
        this.title.value = ""
        this.description.value = ""
        this.people.value = ""
    }

    @autobind
    private onSubmit(e: Event) {
        e.preventDefault()
        const input = this.gatherInput()
        if (Array.isArray(input)) {
            const [title, desc, ppl] = input
            console.log(title, desc, ppl)
            this.clearInputs()
        }
        console.log(this.title.value)
    }

    private configure() {
        // the autobind decorator above removes the need for the below code
        // this.element.addEventListener('submit', this.onSubmit.bind(this))
        this.element.addEventListener('submit', this.onSubmit)
    }

    private attach() {
        this.host.insertAdjacentElement("afterbegin", this.element)
    }
}

const projectInput1 = new ProjectInput()