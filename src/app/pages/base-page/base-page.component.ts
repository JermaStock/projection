import { Component } from '@angular/core';
import {ContentComponent} from '../../shared/components/layout/content/content.component';
import {FooterComponent} from '../../shared/components/layout/footer/footer.component';
import {HeaderComponent} from '../../shared/components/layout/header/header.component';
import {LayoutComponent} from '../../shared/components/layout/layout/layout.component';
import {RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';
import {ProjectsService} from '../../core/services/projects.service';
import {Projects} from '../../core/models';

@Component({
  selector: 'app-base-page',
  imports: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    RouterOutlet
  ],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss'
})
export class BasePageComponent {
  public projects$: Observable<Projects[]>;

  constructor(
    private readonly projectsService: ProjectsService
  ) {
    this.projects$ = projectsService.getProjects();
  }
}
