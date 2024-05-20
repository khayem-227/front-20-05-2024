import { TestBed } from '@angular/core/testing';

import { EntiteMereUltimeService } from './entite-mere-ultime.service';

describe('EntiteMereUltimeService', () => {
  let service: EntiteMereUltimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntiteMereUltimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
