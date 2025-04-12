import {Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ProjectsListComponent} from './projects-list/projects-list.component';

export const router: Routes = [
  {
    path: '',
    title: 'Projects',
    loadComponent: () => ProjectsListComponent,
  },
  {
    path: ':projectId',
    title: 'Project',
    loadComponent: () => ProjectComponent,
  },
]
