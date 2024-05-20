import { TestBed } from '@angular/core/testing';

import { LigneActifIncorporelService } from './ligne-actif-incorporel.service';

describe('LigneActifIncorporelService', () => {
  let service: LigneActifIncorporelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneActifIncorporelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
