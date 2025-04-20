import {Routes} from '@angular/router';

export const router: Routes = [
  {
    path: '',
    title: 'Projects',
    loadComponent: () => import('./projects-list/projects-list.component').then(c => c.ProjectsListComponent),
  },
  {
    path: ':projectId',
    title: 'Project',
    loadComponent: () => import('./project/project.component').then(c => c.ProjectComponent),
  },
]
