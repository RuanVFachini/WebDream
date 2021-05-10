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

}
