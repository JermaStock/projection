import {Routes} from '@angular/router';
import {LoggedInGuard} from './core/guards/logged-in.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projects' },
  { path: 'auth', pathMatch: 'prefix', redirectTo: 'auth/sign-in' },
  {
    path: '',
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'projects',
        loadChildren: () => import('./pages/base-page/base-page.routes').then(r => r.router),
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./core/auth/sign-in/sign-in.component').then(c => c.SignInComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'projects',
  }
];
