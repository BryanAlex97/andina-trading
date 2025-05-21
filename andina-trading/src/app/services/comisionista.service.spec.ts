import { TestBed } from '@angular/core/testing';

import { ComisionistaService } from './comisionista.service';

describe('ComisionistaService', () => {
  let service: ComisionistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComisionistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
