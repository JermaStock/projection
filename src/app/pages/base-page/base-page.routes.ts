import {Routes} from '@angular/router';
import {LoggedInGuard} from '../../core/guards/logged-in.guard';

export const router: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projects' },
  { path: 'auth', pathMatch: 'prefix', redirectTo: 'auth' },
  {
    path: '',
    loadComponent: () => import('./base-page.component').then(c => c.BasePageComponent),
    children: [
      {
        path: 'projects',
        canActivate: [LoggedInGuard],
        loadChildren: () => import('../projects/projects.routes').then(r => r.router),
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.routes').then(r => r.router),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'projects',
  }
];
