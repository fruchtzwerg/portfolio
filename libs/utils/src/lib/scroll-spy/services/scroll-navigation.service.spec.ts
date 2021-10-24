import { TestBed } from '@angular/core/testing';

import { ScrollNavigationService } from './scroll-navigation.service';

describe('ScrollNavigationService', () => {
  let service: ScrollNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
