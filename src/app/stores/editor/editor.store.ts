import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AddNewElement } from './editor.actions';
import { Editor } from './editor.model';

@State<Editor>({
  name: 'Editor',
  defaults: new Editor()
})
@Injectable()
export class EditorState {

    @Selector()
    static appendNewElement(state: Editor) {
        return state.AppendElement;
    }

    @Action(AddNewElement)
    appendElement(ctx: StateContext<Editor>, action: AddNewElement) {
        const state = ctx.getState();
        ctx.setState({...state, AppendElement: action.element});
    }
}
