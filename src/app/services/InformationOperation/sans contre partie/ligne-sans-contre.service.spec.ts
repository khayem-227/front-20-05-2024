import { TestBed } from '@angular/core/testing';

import { LigneSansContreService } from './ligne-sans-contre.service';

describe('LigneSansContreService', () => {
  let service: LigneSansContreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneSansContreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
