export class Editor {
    AppendElement : AppendElement
}

export class AppendElement
{
    node : HTMLElement;
    owner: string;

    constructor(node : HTMLElement, owner: string) {
        this.node = node;
        this.owner = owner;
    }
}


