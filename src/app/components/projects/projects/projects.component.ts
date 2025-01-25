import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiAppearance, TuiButton, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';
import {AsyncPipe} from '@angular/common';
import {Project, ProjectsService} from '../../../services/projects.service';
import {LoaderService} from '../../../services/loader.service';
import {combineLatest, filter, map, Observable, switchMap, tap} from 'rxjs';
import {TuiLet} from '@taiga-ui/cdk';

@Component({
  selector: 'app-projects',
  imports: [
    TuiButton,
    TuiCardMedium,
    AsyncPipe,
    TuiAppearance,
    TuiTitle,
    TuiLoader,
    TuiLet,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true,
  providers: [
    {
      provide: LoaderService,
      useClass: LoaderService
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private readonly projectsService = inject(ProjectsService);
  private readonly loader = inject(LoaderService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public loading$ = this.loader.loading$;
  public projects$ = this.loading$.pipe(
    filter(Boolean),
    switchMap(() => this.projectsService.getProjects()),
    tap(() => this.loader.toggle(false)),
  );

  navigateToProject(projectPath: string) {
    this.router.navigate([projectPath], {relativeTo: this.route}).then();
  }

  updateProjects() {
    this.loader.toggle(true);
  }
}
