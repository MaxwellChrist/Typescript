"use strict";
class ProjectInput {
    constructor() {
        this.template = document.getElementById("project-input");
        this.host = document.getElementById("app");
        const importedNode = document.importNode(this.template.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.host.insertAdjacentElement("afterbegin", this.element);
    }
}
const projectInput1 = new ProjectInput();
//# sourceMappingURL=app.js.map