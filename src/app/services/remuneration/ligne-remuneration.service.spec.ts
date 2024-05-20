import { TestBed } from '@angular/core/testing';

import { LigneRemunerationService } from './ligne-remuneration.service';

describe('LigneRemunerationService', () => {
  let service: LigneRemunerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneRemunerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
