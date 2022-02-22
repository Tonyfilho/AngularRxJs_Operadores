import { TestBed } from '@angular/core/testing';

import { ForkZipService } from './fork-zip.service';

describe('ForkZipService', () => {
  let service: ForkZipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkZipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
