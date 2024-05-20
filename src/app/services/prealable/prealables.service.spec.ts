import { TestBed } from '@angular/core/testing';

import { PrealablesService } from './prealables.service';

describe('PrealablesService', () => {
  let service: PrealablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrealablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
