import { TestBed } from '@angular/core/testing';

import { LigneAccordeService } from './ligne-accorde.service';

describe('LigneAccordeService', () => {
  let service: LigneAccordeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneAccordeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
