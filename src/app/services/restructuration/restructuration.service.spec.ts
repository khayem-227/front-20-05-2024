import { TestBed } from '@angular/core/testing';

import { RestructurationService } from './restructuration.service';

describe('RestructurationService', () => {
  let service: RestructurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestructurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
