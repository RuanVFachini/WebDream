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

}
