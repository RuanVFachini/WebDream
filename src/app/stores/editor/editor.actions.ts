import { AppendElement } from "./editor.model";

export class AddNewElement {
    static readonly type = '[Editor] Add new HTML Element';
    constructor(public element: AppendElement) {}
}