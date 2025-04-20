import {Routes} from '@angular/router';


export const router: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    title: 'Sign in',
    loadComponent: () => import('../../core/auth/sign-in/sign-in.component').then(c => c.SignInComponent),
  },
  {
    path: 'sign-up',
    title: 'Sign up',
    loadComponent: () => import('../../core/auth/sign-up/sign-up.component').then(c => c.SignUpComponent),
  }
];
