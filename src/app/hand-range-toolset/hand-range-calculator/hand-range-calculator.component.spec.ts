import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandRangeCalculatorComponent } from './hand-range-calculator.component';

describe('HandRangeCalculatorComponent', () => {
  let component: HandRangeCalculatorComponent;
  let fixture: ComponentFixture<HandRangeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandRangeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandRangeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
