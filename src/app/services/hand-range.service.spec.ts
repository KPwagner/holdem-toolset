import { TestBed } from '@angular/core/testing';

import { HandRangeService } from './hand-range.service';

describe('HandRangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandRangeService = TestBed.get(HandRangeService);
    expect(service).toBeTruthy();
  });
});
