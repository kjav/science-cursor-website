import { TestBed } from '@angular/core/testing';

import { PaperRatingService } from './paper-rating.service';

describe('PaperRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperRatingService = TestBed.get(PaperRatingService);
    expect(service).toBeTruthy();
  });
});
