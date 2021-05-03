import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  @Input()
  label: string

  @Input()
  applyPreviewStyle: string = null;

  @Input()
  value: string

  @Input()
  choices: []

  @Output()
  valueChange: EventEmitter<string>;

  constructor() {
    this.valueChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  change(value: string) : void {
    this.valueChange.emit(value);
  }

}
