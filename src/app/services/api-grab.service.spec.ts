import { TestBed } from '@angular/core/testing';

import { ApiGrabService } from './api-grab.service';

describe('ApiGrabService', () => {
  let service: ApiGrabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGrabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
