import { Routes } from '@angular/router';
import { MainViewComponent } from './homepage/main-view/main-view.component';
import { RegisterPageComponent } from './homepage/register-page/register-page.component';
import { LoginComponent } from './shared/login/login.component';

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
];
