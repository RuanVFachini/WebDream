import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  elementId : string;
  ids = []
  activeOnStyle: HTMLElement = null;

  constructor() {
    this.elementId = Constants.MainId;
  }

  ngOnInit(): void {
  }

  generateId() : string {
    let id = this.elementId + "-" + this.ids.length;
    this.ids.push(id);
    return id;
  }

  loadOnStylePanel(event : MouseEvent) {
    this.doneEvent(event);

    this.activeOnStyle = <HTMLElement> event.target;
  }

  drop(dropevent: DragEvent) : void {
    this.doneEvent(dropevent);

    let target = <HTMLElement> dropevent.target;
    let droped = <HTMLElement> window['newElement'];
    
    droped.id = this.generateId();
    droped.addEventListener("click", (event) => this.loadOnStylePanel(event));
    target.appendChild(droped);
  }

  allowDrop(event: MouseEvent) : void {
    if (typeof event != 'undefined'){
      this.doneEvent(event);
    }
  }

  doneEvent(event : MouseEvent) : void {
    event.preventDefault();
    event.stopPropagation();
  }
}
