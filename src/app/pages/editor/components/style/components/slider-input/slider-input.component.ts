import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CssValues } from '../../data/style.cssvalues.consts';
import { SelectModel } from '../../models/style.models';

@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent implements OnInit {

  @Input()
  label: string

  @Input()
  value: number = 0;
  @Input()
  valuePercent: number = 0;
  @Input()
  unit: string;
  @Input()
  unitChoices: SelectModel[] = new CssValues().units;

  @Output()
  valueChange: EventEmitter<number>;
  @Output()
  valuePercentChange: EventEmitter<number>;
  @Output()
  unitChange: EventEmitter<string>;

  constructor() {
    this.valueChange = new EventEmitter<number>();
    this.valuePercentChange = new EventEmitter<number>();
    this.unitChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  changeSlider(value: number) : void {
    this.unit = this.unitChoices[0].value;
    this.value = value;
    this.valuePercentChange.emit(value);
  }

  changeValue(value: number) : void {
    this.valueChange.emit(value);
    this.unit = this.unitChoices[1].value;
  }

  changeUnit(value: string) : void {
    this.unitChange.emit(value);
  }
}
