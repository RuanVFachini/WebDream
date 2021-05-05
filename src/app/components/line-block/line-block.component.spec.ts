import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBlockComponent } from './line-block.component';

describe('LineBlockComponent', () => {
  let component: LineBlockComponent;
  let fixture: ComponentFixture<LineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
