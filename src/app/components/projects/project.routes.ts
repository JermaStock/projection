import {Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ProjectsComponent} from './projects/projects.component';

export const router: Routes = [
  {
    title: 'Projects',
    path: '',
    loadComponent: () => ProjectsComponent,
  },
  {
    title: 'Project',
    path: ':projectId',
    loadComponent: () => ProjectComponent,
  },
]
