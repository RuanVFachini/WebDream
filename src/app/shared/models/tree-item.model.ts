export class TreeItem {
    element: HTMLElement;
    description: string;

    constructor(element: HTMLElement, description: string) {
        this.element = element;
        this.description = description;
    }
}