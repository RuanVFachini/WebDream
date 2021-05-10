import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HtmlService } from './services/html.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  elementId : string;
  ids: string[] = [];
  activeOnStyle: HTMLElement = null;
  tableOnEditing: HTMLElement = null;
  listOnEditing: HTMLElement = null;

  constructor(private htmlService: HtmlService) {
    this.elementId = Constants.MainId;
  }

  ngOnInit(): void {
  }

  loadOnStylePanel(event : MouseEvent) {
    this.htmlService.doneEvent(event);
    this.activeOnStyle = <HTMLElement> event.target;
  }

  setOnEditing(type: string, event : MouseEvent) {
    this.htmlService.doneEvent(event);

    switch(type)
    {
      case 'TABLE':
        this.tableOnEditing = <HTMLElement> event.target;
        break;
      case 'OL':
        this.listOnEditing = <HTMLElement> event.target;
        break;
    }
  }

  resetOnEditing(event : MouseEvent) {
    this.htmlService.doneEvent(event);

    if (this.tableOnEditing != null && this.tableOnEditing.id == (<HTMLElement> event.target).id)
      this.tableOnEditing = null;
    else if (this.listOnEditing != null && this.listOnEditing.id == (<HTMLElement> event.target).id)
      this.listOnEditing = null;
  }

  drop(dropevent: DragEvent) : void {
    this.htmlService.doneEvent(dropevent);

    let target = <HTMLElement> dropevent.target;
    let droped = <HTMLElement> window['newElement'];

    droped.id = this.htmlService.generateId(this.ids, this.elementId);

    if (droped.nodeName == 'TABLE' || droped.nodeName == 'OL')
    {
      droped.addEventListener("mouseenter", (event) => this.setOnEditing(droped.nodeName, event));
      droped.addEventListener("mouseleave", (event) => this.resetOnEditing(event));
    }

    droped.addEventListener("click", (event) => this.loadOnStylePanel(event));
    target.appendChild(droped);
  }

  allowDrop(event: MouseEvent) : void {
    if (typeof event != 'undefined'){
      this.htmlService.doneEvent(event);
    }
  }
}
