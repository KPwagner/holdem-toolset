import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandRangeToolsetComponent } from './hand-range-toolset.component';

describe('HandRangeToolsetComponent', () => {
  let component: HandRangeToolsetComponent;
  let fixture: ComponentFixture<HandRangeToolsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandRangeToolsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandRangeToolsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
