import { TestBed } from '@angular/core/testing';

import { AnimtionsDataService } from './animations-data.service';

describe('AnimtionsDataService', () => {
  let service: AnimtionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimtionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
