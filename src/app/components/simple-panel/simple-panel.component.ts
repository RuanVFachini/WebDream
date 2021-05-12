import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-simple-panel',
  templateUrl: './simple-panel.component.html',
  styleUrls: ['./simple-panel.component.scss']
})
export class SimplePanelComponent implements OnInit, AfterViewInit {

  @ViewChild('panel')
  panel: HTMLElement;
  

  @Input()
  x: number = 0;
  @Input()
  y: number = 0;
  @Input()
  height: number = 0;
  @Input()
  width: number = 0;
  elementId: string;

  constructor() {
    this.elementId = Constants.MainId;
  }

  ngAfterViewInit(): void {
    this.panel['nativeElement'].style.transform = `translate(${this.getLeft()}px, ${this.y}px)`;
  }

  ngOnInit(): void {
  }

  getLeft() : number {
    let fullWidth = document.getElementById(this.elementId).getBoundingClientRect().width;

    if ((this.x + this.width) < fullWidth / 2)
    {
      return this.x + this.width;
    }
    
    return this.x - this.panel['nativeElement'].getBoundingClientRect().width;
  }
}
