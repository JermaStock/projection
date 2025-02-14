import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    title: 'Projects',
    path: '',
    loadChildren: () => import('./components/projects/project.routes').then(r => r.router),
  },
  {
    title: 'Test cmp',
    path: 'test-cmp',
    loadChildren: () => import('./components/testcmp/test.routes').then(r => r.router),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
