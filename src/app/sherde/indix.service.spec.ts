import { TestBed } from '@angular/core/testing';

import { IndixService } from './indix.service';

describe('IndixService', () => {
  let service: IndixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
