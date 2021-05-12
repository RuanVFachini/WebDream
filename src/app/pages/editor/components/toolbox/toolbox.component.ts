import { Component, OnInit } from '@angular/core';
import { ElementTransfer } from 'src/app/shared/models/element-transfer.model';
import { ElementsList } from './data/elements.consts';
import { CustomElement } from './models/element.models';


@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  elements: CustomElement[];

  constructor() {
    this.elements = ElementsList.default
  }

  ngOnInit(): void {
  }

  setDataTransfer(dragEvent: any, item: CustomElement) : void {
    window['newElement'] = new ElementTransfer(item.element.cloneNode(true), item.description);
  }
}
