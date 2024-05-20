import { TestBed } from '@angular/core/testing';

import { LigneAvecContrePartieService } from './ligne-avec-contre-partie.service';

describe('LigneAvecContrePartieService', () => {
  let service: LigneAvecContrePartieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneAvecContrePartieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
