import { Routes } from '@angular/router';
import { MainViewComponent } from './homepage/main-view/main-view.component';
import { RegisterPageComponent } from './homepage/register-page/register-page.component';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ConsultPageComponent } from './admin/consult-page/consult-page.component';
import { PrescriptionPageComponent } from './admin/prescription-page/prescription-page.component';
import { authGuard } from './shared/guards/auth-guard-off/auth.guard';
import { authEnableGuard } from './shared/guards/auth-guard-on/auth-enable.guard';
import { ValidatePrescriptionPageComponent } from './admin/validate-prescription-page/validate-prescription-page.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainViewComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'register', 
    component: RegisterPageComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'app/dashboard', 
    component: DashboardComponent,
    canActivate: [authEnableGuard]
  },
  { 
    path: 'app/consult', 
    component: ConsultPageComponent,
    canActivate: [authEnableGuard]
  },
  { 
    path: 'app/prescription', 
    component: PrescriptionPageComponent,
    canActivate: [authEnableGuard]
  },
  { 
    path: 'app/validate-prescription', 
    component: ValidatePrescriptionPageComponent,
    canActivate: [authEnableGuard]
  }
];
