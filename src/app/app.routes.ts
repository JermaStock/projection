import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/base-page/base-page.routes').then(r => r.router),
  }
];
