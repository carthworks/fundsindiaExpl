import { TestBed } from '@angular/core/testing';

import { MockserverresultsService } from './mockserverresults.service';

describe('MockserverresultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockserverresultsService = TestBed.get(MockserverresultsService);
    expect(service).toBeTruthy();
  });
});
