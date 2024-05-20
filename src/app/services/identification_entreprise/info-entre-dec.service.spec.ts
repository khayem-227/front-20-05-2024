import { TestBed } from '@angular/core/testing';

import { InfoEntreDecService } from './info-entre-dec.service';

describe('InfoEntreDecService', () => {
  let service: InfoEntreDecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoEntreDecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
