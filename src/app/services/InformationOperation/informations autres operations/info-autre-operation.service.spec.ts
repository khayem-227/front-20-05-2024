import { TestBed } from '@angular/core/testing';

import { InfoAutreOperationService } from './info-autre-operation.service';

describe('InfoAutreOperationService', () => {
  let service: InfoAutreOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAutreOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
