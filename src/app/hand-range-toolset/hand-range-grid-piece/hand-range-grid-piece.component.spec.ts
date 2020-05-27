import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandRangeGridPieceComponent } from './hand-range-grid-piece.component';

describe('HandRangeGridPieceComponent', () => {
  let component: HandRangeGridPieceComponent;
  let fixture: ComponentFixture<HandRangeGridPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandRangeGridPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandRangeGridPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
