import { TestBed } from '@angular/core/testing';

import { InfoOpFinService } from './info-op-fin.service';

describe('InfoOpFinService', () => {
  let service: InfoOpFinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoOpFinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
