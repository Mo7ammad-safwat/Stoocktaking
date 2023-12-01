import { TestBed } from '@angular/core/testing';

import { ApiconttService } from './apicontt.service';

describe('ApiconttService', () => {
  let service: ApiconttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
