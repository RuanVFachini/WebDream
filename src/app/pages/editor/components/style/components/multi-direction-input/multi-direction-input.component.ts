import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CssValues } from '../../data/style.cssvalues.consts';
import { SelectModel } from '../../models/style.models';

@Component({
  selector: 'app-multi-direction-input',
  templateUrl: './multi-direction-input.component.html',
  styleUrls: ['./multi-direction-input.component.scss']
})
export class MultiDirectionInputComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  top: number = 0;
  @Output()
  topChange: EventEmitter<number>;

  @Input()
  topUnit: string;
  @Output()
  topUnitChange: EventEmitter<string>;

  @Input()
  bottom: number = 0;
  @Output()
  bottomChange: EventEmitter<number>;

  @Input()
  bottomUnit: string;
  @Output()
  bottomUnitChange: EventEmitter<string>;

  @Input()
  left: number = 0;
  @Output()
  leftChange: EventEmitter<number>;

  @Input()
  leftUnit: string;
  @Output()
  leftUnitChange: EventEmitter<string>;

  @Input()
  right: number = 0;
  @Output()
  rightChange: EventEmitter<number>;

  @Input()
  rightUnit: string;
  @Output()
  rightUnitChange: EventEmitter<string>;

  @Input()
  unitChoices: SelectModel[] = new CssValues().units;

  constructor() { 
    this.topChange = new EventEmitter<number>();
    this.topUnitChange = new EventEmitter<string>();
    this.bottomChange = new EventEmitter<number>();
    this.bottomUnitChange = new EventEmitter<string>();
    this.leftChange = new EventEmitter<number>();
    this.leftUnitChange = new EventEmitter<string>();
    this.rightChange = new EventEmitter<number>();
    this.rightUnitChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onChangeValue(value:number, pos: string) :void {
    switch (pos) {
      case 't':
        this.topChange.emit(value);
        break;
      case 'b':
        this.bottomChange.emit(value);
        break;
      case 'l':
        this.leftChange.emit(value);
        break;
      case 'r':
        this.rightChange.emit(value);
        break;
    }
  }

  onChangeUnit(value:string, pos: string) :void {
    switch (pos) {
      case 't':
        this.topUnitChange.emit(value);
        break;
      case 'b':
        this.bottomUnitChange.emit(value);
        break;
      case 'l':
        this.leftUnitChange.emit(value);
        break;
      case 'r':
        this.rightUnitChange.emit(value);
        break;
    }
  }

}
