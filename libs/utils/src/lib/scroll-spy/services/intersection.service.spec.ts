import { TestBed } from '@angular/core/testing';

import { IntersectionService } from './intersection.service';

describe('IntersectionSpyService', () => {
  let service: IntersectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
