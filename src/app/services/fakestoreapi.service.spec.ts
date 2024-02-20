import { TestBed } from '@angular/core/testing';

import { FakestoreapiService } from './fakestoreapi.service';

describe('FakestoreapiService', () => {
  let service: FakestoreapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
