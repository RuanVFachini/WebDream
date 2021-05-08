import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CssStyle } from 'src/app/shared/models/css-style.model';
import { CssValues } from './data/style.cssvalues.consts';

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
