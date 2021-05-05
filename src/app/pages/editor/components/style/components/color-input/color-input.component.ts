import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {
  @Input()
  label : string;

  @Input()
  value : string;
  @Output()
  valueChange : EventEmitter<string>;

  constructor() {
    this.valueChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  ChangeValue(value : string) {
    this.value = value;
    this.valueChange.emit(value);
  }

}
