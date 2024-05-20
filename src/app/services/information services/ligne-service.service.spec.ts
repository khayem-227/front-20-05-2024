import { TestBed } from '@angular/core/testing';

import { LigneServiceService } from './ligne-service.service';

describe('LigneServiceService', () => {
  let service: LigneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
