import { TestBed } from '@angular/core/testing';

import { RequestDateApiService } from './request-date-api.service';

describe('RequestDateApiService', () => {
  let service: RequestDateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestDateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
