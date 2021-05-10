import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.scss']
})
export class SimplePanelComponent implements OnInit {

  @Input()
  x: number = 0;
  @Input()
  y: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
