import { CanActivateFn } from '@angular/router';
import { MainSharedService } from '../../service/main-shared.service';
import { inject } from '@angular/core';

export const authEnableGuard: CanActivateFn = (route, state) => {
  const sidenavService = inject(MainSharedService);
  sidenavService.enable();
  return true;
};


