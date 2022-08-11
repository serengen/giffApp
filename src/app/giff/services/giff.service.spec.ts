import { TestBed } from '@angular/core/testing';

import { GiffService } from './giff.service';

describe('GiffService', () => {
  let service: GiffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
