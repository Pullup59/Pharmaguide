import { Routes } from '@angular/router';
import { MainViewComponent } from './homepage/main-view/main-view.component';
import { RegisterPageComponent } from './homepage/register-page/register-page.component';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ConsultPageComponent } from './admin/consult-page/consult-page.component';
import { PrescriptionPageComponent } from './admin/prescription-page/prescription-page.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainViewComponent,
  },
  { 
    path: 'register', 
    component: RegisterPageComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'app/dashboard', 
    component: DashboardComponent
  },
  { 
    path: 'app/consult', 
    component: ConsultPageComponent
  },
  { 
    path: 'app/prescription', 
    component: PrescriptionPageComponent
  }
];
