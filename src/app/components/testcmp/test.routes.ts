import {Routes} from '@angular/router';
import {TestcmpComponent} from './testcmp.component';

export const router: Routes = [
  {
    title: 'Test CMP',
    path: '',
    loadComponent: () => TestcmpComponent,
  },
  // {
  //   title: 'Project',
  //   path: ':projectId',
  //   loadComponent: () => ProjectComponent,
  // },
]
