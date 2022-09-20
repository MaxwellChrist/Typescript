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

// validator
interface Validator {
    value: string | number,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,
}

// state manager class
class StateManager {
    private listeners: any[] = []
    private projects: any[] = []
    private static instance: StateManager

    private constructor() {

    }

    static getInstance() {
        if(this.instance) {
            return this.instance
        }
        this.instance = new StateManager()
        return this.instance
    }

    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn)
    }

    addProject(title: string, description: string, people: number) {
        const newProject = {
            id: Math.round(Math.random() * 100).toString(),
            title: title,
            description: description,
            people: people,
        }
        this.projects.push(newProject)
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice())
        }
    }
}

// instantiate project state
const projectState = StateManager.getInstance()


function getValidation(input: Validator) {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0
    }
    if (input.minLength != null && typeof input.value === "string") {
        isValid = isValid && input.value.length >= input.minLength
    }
    if (input.maxLength != null && typeof input.value === "string") {
        isValid = isValid && input.value.length <= input.maxLength
    }
    if (input.min != null && typeof input.value === "number") {
        isValid = isValid && input.value >= input.min
    }
    if (input.max != null && typeof input.value === "number") {
        isValid = isValid && input.value <= input.max
    }
    return isValid
}

class ProjectList {
    template: HTMLTemplateElement
    host: HTMLDivElement
    element: HTMLElement
    assignedProjects: any[]

    constructor(private type: "active" | "finished") {
        this.template = document.getElementById("project-list") as HTMLTemplateElement
        this.host = document.getElementById("app") as HTMLDivElement
        this.assignedProjects = []
        const importedNode = document.importNode(this.template.content, true)
        this.element = importedNode.firstElementChild as HTMLElement
        this.element.id = `${this.type}-projects`
        projectState.addListener((projects: any[]) => {
            this.assignedProjects = projects
            this.renderProjects()
        })
        this.attach()
        this.renderer()
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement
        for (const item of this.assignedProjects) {
            const listItem = document.createElement("li")
            listItem.textContent = item.title
            listEl.appendChild(listItem)
        }
    }

    private renderer() {
        const listId = `${this.type}-projects-list`
        this.element.querySelector("ul")!.id = listId
        this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + "PROJECTS"

    }

    private attach() {
        this.host.insertAdjacentElement("beforeend", this.element)
    }
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

        const titleValid: Validator = {
            value: enteredTitle,
            required: true
        }
        const descriptionValid: Validator = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }
        const peopleValid: Validator = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 10
        }

        if (!getValidation(titleValid) ||
            !getValidation(descriptionValid) ||
            !getValidation(peopleValid)
        ) {
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
            projectState.addProject(title, desc, ppl)
            this.clearInputs()
        }
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
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')