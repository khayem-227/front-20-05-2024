import { TestBed } from '@angular/core/testing';

import { LigneActifCorporelService } from './ligne-actif-corporel.service';

describe('LigneActifCorporelService', () => {
  let service: LigneActifCorporelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneActifCorporelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
