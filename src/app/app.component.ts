import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TuiAppearance, TuiButton, TuiRoot, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';
import {ProjectsService} from './services/projects.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {HeaderComponent} from './components/layout/header/header.component';
import {ContentComponent} from './components/layout/content/content.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {LayoutComponent} from './components/layout/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LayoutComponent,
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
