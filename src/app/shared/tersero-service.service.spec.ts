import { TestBed } from '@angular/core/testing';

import { TerseroServiceService } from './tersero-service.service';

describe('TerseroServiceService', () => {
  let service: TerseroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerseroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
