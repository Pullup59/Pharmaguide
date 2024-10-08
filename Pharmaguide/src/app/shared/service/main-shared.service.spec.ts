import { TestBed } from '@angular/core/testing';

import { MainSharedService } from './main-shared.service';

describe('MainSharedService', () => {
  let service: MainSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
