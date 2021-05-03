import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDirectionInputComponent } from './multi-direction-input.component';

describe('MultiDirectionInputComponent', () => {
  let component: MultiDirectionInputComponent;
  let fixture: ComponentFixture<MultiDirectionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDirectionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDirectionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
