import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { ElementTransfer } from 'src/app/shared/models/element-transfer.model';
import { TreeItem } from 'src/app/shared/models/tree-item.model';
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

  elements: TreeItem[] = [];

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

    this.resetElementsOnEditing();

    switch(type)
    {
      case 'TABLE':
        this.tableOnEditing = <HTMLElement> event.target;
        break;
      case 'OL':
        this.listOnEditing = <HTMLElement> event.target;
        break;
    }

    setTimeout(() => {
      this.tableOnEditing = null;
      this.listOnEditing = null;
    }, 5000);
  }

  resetElementsOnEditing()
  {
    this.tableOnEditing = null;
    this.listOnEditing = null;
  }

  drop(dropevent: DragEvent) : void {
    this.htmlService.doneEvent(dropevent);

    let target = <HTMLElement> dropevent.target;
    let droped = <ElementTransfer> window['newElement'];

    let newElement = <HTMLElement> droped.element;
    newElement.id = this.htmlService.generateId(this.ids, this.elementId);

    if (newElement.nodeName == 'TABLE' || newElement.nodeName == 'OL')
    {
      newElement.addEventListener("mouseenter", (event) => this.setOnEditing(newElement.nodeName, event));
    }

    newElement.addEventListener("click", (event) => this.loadOnStylePanel(event));

    this.elements.push(new TreeItem(newElement, droped.description));

    target.appendChild(newElement);
  }

  allowDrop(event: MouseEvent) : void {
    if (typeof event != 'undefined'){
      this.htmlService.doneEvent(event);
    }
  }
}
