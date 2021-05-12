import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss']
})
export class ListOptionsComponent implements OnInit {

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
    var newLine = document.createElement('li');
    newLine.innerHTML = "Novo item";

    (<HTMLElement> this.element).append(newLine);
    
  }
}
