import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandRangeGridComponent } from './hand-range-grid.component';

describe('HandRangeGridComponent', () => {
  let component: HandRangeGridComponent;
  let fixture: ComponentFixture<HandRangeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandRangeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandRangeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
