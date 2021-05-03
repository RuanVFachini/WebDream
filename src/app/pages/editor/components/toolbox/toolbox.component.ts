import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  elements = [];

  constructor() {

    this.elements.push({
      node: () => {
        var regionNode = document.createElement('div');
        regionNode.style.width = "100%";
        regionNode.style.height = "50px";
        regionNode.style.backgroundColor = "blue";
        regionNode.style.display = "flex";
        return regionNode;
      },
      description: 'Região Azul',
    },
    {
      node: () => {
        var regionNode = document.createElement('div');
        regionNode.style.width = "100%";
        regionNode.style.height = "50px";
        regionNode.style.backgroundColor = "red";
        regionNode.style.display = "flex";
        return regionNode;
      },
      description: 'Região Vermelha',
    });
  }

  ngOnInit(): void {
  }

  setDataTransfer(dragEvent: any, element: any) : void {
    window['newElement'] = element.node();
  }
}
