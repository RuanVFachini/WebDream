import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  @Input()
  value: number = 0;
  @Input()
  label: string;

  @Output()
  valueChange: EventEmitter<number>;

  constructor() {
    this.valueChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  change(value: number) : void {
    this.valueChange.emit(value);
  }

}
