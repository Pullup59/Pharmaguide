import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authEnableGuard } from './auth-enable.guard';

describe('authEnableGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authEnableGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
