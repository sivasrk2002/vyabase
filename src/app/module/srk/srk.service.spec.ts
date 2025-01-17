import { TestBed } from '@angular/core/testing';

import { SrkService } from './srk.service';

describe('SrkService', () => {
  let service: SrkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
