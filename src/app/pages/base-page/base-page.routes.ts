import {Routes} from '@angular/router';


export const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./base-page.component').then(c => c.BasePageComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('../projects/projects.routes').then(r => r.router),
      }
    ]
  },
];
