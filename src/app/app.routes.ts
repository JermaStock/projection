import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    title: 'Projects',
    path: 'projects',
    loadChildren: () => import('./components/projects/project.routes').then(mod => mod.router),
  },
  {
    path: '**',
    redirectTo: 'projects',
  }
];
