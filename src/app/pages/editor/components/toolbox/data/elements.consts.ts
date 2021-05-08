import { CustomElement } from "../models/element.models";

function createDivLine() {
    let div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "50px";
    div.style.backgroundColor = "blue";
    div.style.display = "flex";

    return div;
}

function createDivColumn() {
    let div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "100%";
    div.style.backgroundColor = "red";
    div.style.display = "flex";

    return div;
}

export class Elements {
    default : CustomElement[];

    constructor(elements: CustomElement[]) {
        this.default = elements;
    }
}

export const ElementsList =  new Elements([
    new CustomElement(createDivLine(), "Linha"),
    new CustomElement(createDivColumn(), "Coluna")
]);

