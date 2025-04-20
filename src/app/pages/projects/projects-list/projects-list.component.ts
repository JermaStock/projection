import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiAppearance, TuiButton, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';
import {AsyncPipe} from '@angular/common';
import {ProjectsService} from '../services/projects.service';
import {LoaderService} from '../../../shared/services/loader.service';
import {filter, switchMap, tap} from 'rxjs';
import {TuiLet} from '@taiga-ui/cdk';
import {ProjectsList} from '../../../core/models';
import {TuiBadge} from '@taiga-ui/kit';
import {CountPipe} from '../../../core/pipes/count.pipe';

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
    TuiBadge,
    CountPipe,
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  standalone: true,
  providers: [
    {
      provide: LoaderService,
      useClass: LoaderService
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
  private readonly projectsService = inject(ProjectsService);
  public readonly loader = inject(LoaderService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public loading$ = this.loader.loading$;
  public projects$ = this.loading$.pipe(
    filter(Boolean),
    switchMap(() => this.projectsService.getProjects()),
    tap(() => this.loader.toggle(false)),
  );

  constructor() {
    this.refresh();
  }

  public navigateToProject(project: ProjectsList) {
    this.router.navigate([project.name], {relativeTo: this.route}).then();
  }

  public updateProjects() {
    this.refresh();
  }

  private refresh() {
    this.loader.toggle(true);
  }
}
