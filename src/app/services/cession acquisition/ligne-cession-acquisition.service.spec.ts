import { TestBed } from '@angular/core/testing';

import { LigneCessionAcquisitionService } from './ligne-cession-acquisition.service';

describe('LigneCessionAcquisitionService', () => {
  let service: LigneCessionAcquisitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneCessionAcquisitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
