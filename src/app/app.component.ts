import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TuiAppearance, TuiButton, TuiRoot, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';
import {ProjectsService} from './services/projects.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {

  public projects$: Observable<string[]>;

  constructor(
    private readonly projectsService: ProjectsService
  ) {
    this.projects$ = projectsService.getProjects();
  }

}
