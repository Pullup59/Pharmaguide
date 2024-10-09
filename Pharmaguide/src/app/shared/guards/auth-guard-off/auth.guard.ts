import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MainSharedService } from '../../service/main-shared.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sidenavService = inject(MainSharedService);
  sidenavService.disable();
  return true;
};
