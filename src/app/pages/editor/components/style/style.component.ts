import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CssValues } from './data/style.cssvalues.consts';
import { CssStyle } from './models/style.models';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  @Input()
  element: HTMLElement;

  @Output()
  elementChange: EventEmitter<HTMLElement>;

  cssValues: CssValues;
  values: CssStyle
  backup: string;

  constructor() {
    this.elementChange = new EventEmitter<HTMLElement>();
    this.cssValues = new CssValues();
    this.values = new CssStyle();
  }

  ngOnInit(): void {

  }

  apply() : void {
  }

}
