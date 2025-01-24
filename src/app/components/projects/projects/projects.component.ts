import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {TuiAppearance, TuiButton, TuiRoot, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ProjectsService} from '../../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [
    TuiButton,
    TuiCardMedium,
    AsyncPipe,
    TuiAppearance,
    TuiTitle,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true,
})
export class ProjectsComponent {
  private readonly projectsService = inject(ProjectsService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public projects$ = this.projectsService.getProjects();

  navigateToProject(projectPath: string) {
    this.router.navigate([projectPath], {relativeTo: this.route}).then();
  }
}
