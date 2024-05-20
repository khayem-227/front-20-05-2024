import { TestBed } from '@angular/core/testing';

import { IdentificationEntrepriseService } from './identification-entreprise.service';

describe('IdentificationEntrepriseService', () => {
  let service: IdentificationEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
