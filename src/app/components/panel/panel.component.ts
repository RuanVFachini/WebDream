import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  
  @ViewChild('myPanel')
  private myPanel: ElementRef;
  private onDrag = false;
  private referenceDistanceX = 0;
  private referenceDistanceY = 0;

  collapsed:boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  setCollapse(collapse: boolean) : void {
    this.collapsed = collapse;
  }

  startDragPanel(event : MouseEvent) : void {
    this.stopExtenalEvents(event);
    this.onDrag = true;
    var currentDomRect = this.myPanel.nativeElement.getBoundingClientRect();

    this.referenceDistanceX = event.x - currentDomRect.x;
    this.referenceDistanceY = event.y - currentDomRect.y;
  }

  endDragPanel(event : MouseEvent) : void {
    this.stopExtenalEvents(event);
    this.onDrag = false;
  }

  move(event : MouseEvent) : void {
    this.stopExtenalEvents(event);
    
    if (this.onDrag) {
      var posX = event.x - this.referenceDistanceX;
      var posY = event.y - this.referenceDistanceY;
      this.moveTo(posX, posY);
    }
  }

  stopExtenalEvents(event : MouseEvent) : void {
    event.stopPropagation();
    event.preventDefault();
  }

  resetPosition() : void {
    this.moveTo(0, 0);
  }

  moveTo(x: number, y: number) : void {
    this.myPanel.nativeElement.style.transform = `translate( ${x}px, ${y}px)`;
    this.myPanel.nativeElement.style.height = `calc(100% - ${y}px - 40px)`
  }
}
