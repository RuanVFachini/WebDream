import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SelectModel } from '../../models/style.models';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {
  @Input()
  label : string;

  @Input()
  value : string;
  @Output()
  valueChange : EventEmitter<string>;

  @Input()
  positionChoices: SelectModel[] = []
  @Input()
  repeatChoices: SelectModel[] = []
  @Input()
  sizeChoices: SelectModel[] = []

  @Input()
  position: string;
  @Output()
  positionChange : EventEmitter<string>;

  @Input()
  repeat: string;
  @Output()
  repeatChange : EventEmitter<string>;

  @Input()
  size: string;
  @Output()
  sizeChange : EventEmitter<string>;

  @Input()
  color: string;
  @Output()
  colorChange : EventEmitter<string>;

  constructor() {
    this.valueChange = new EventEmitter<string>();
    this.positionChange = new EventEmitter<string>();
    this.repeatChange = new EventEmitter<string>();
    this.sizeChange = new EventEmitter<string>();
    this.colorChange = new EventEmitter<string>();
  }
  ngOnInit(): void {
  }

  changeColor(value : string) : void {
    this.color = value;
    this.colorChange.emit(value);
  }

  changePosition(value : string) : void {
    this.position = value;
    this.positionChange.emit(value);
  }

  changeRepeat(value : string) : void {
    this.repeat = value;
    this.repeatChange.emit(value);
  }

  changeSize(value : string) : void {
    this.size = value;
    this.sizeChange.emit(value);
  }

  change(info: { file: NzUploadFile }): void {
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.value = img;
    });
  }

  getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

}
