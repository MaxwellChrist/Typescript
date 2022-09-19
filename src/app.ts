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

    @autobind
    private onSubmit(e: Event) {
        e.preventDefault()
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