import { TestBed } from '@angular/core/testing';

import { LignePartDecService } from './ligne-part-dec.service';

describe('LignePartDecService', () => {
  let service: LignePartDecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignePartDecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
