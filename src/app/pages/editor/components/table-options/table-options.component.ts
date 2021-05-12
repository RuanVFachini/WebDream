import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.scss']
})
export class TableOptionsComponent implements OnInit {

  @Input()
  element: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  getX() : number {
    return this.element != null ? this.element.getBoundingClientRect().x : 0;
  }

  getY() : number {
    return this.element != null ? this.element.getBoundingClientRect().y : 0;
  }

  getWidth() : number {
    return this.element != null ? this.element.getBoundingClientRect().width : 0;
  }

  getHeight() : number {
    return this.element != null ? this.element.getBoundingClientRect().height : 0;
  }

  AddColumn(): void {
    var newHeader = document.createElement('th');
    newHeader.innerHTML = "Nova Coluna";

    (<HTMLElement> this.element['rows'][0]).appendChild(newHeader);

    var lines = this.element['rows'].length;

    for (let i = 1; i < lines; i++) {
      var newTd = document.createElement('td');
      newTd.innerHTML = "Nova Coluna";
      (<HTMLElement> this.element['rows'][i]).appendChild(newTd);
    }
    
  }

  AddLine(): void {
    let table = (<HTMLTableElement> this.element);
    let maxIndex = (<HTMLCollection> table.rows).length;
    let headersCount = (<HTMLCollection> table.rows)[0].childElementCount;
    console.log(headersCount);

    (<HTMLTableElement> this.element).insertRow();

    for (let i=0; i < headersCount; i++) {
      let newTd = document.createElement('td');
      newTd.innerHTML = "Nova Célula";
      table.rows[maxIndex].appendChild(newTd);
    }
    
  }
}
