import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {ProjectsService} from '../services/projects.service';
import {AsyncPipe} from '@angular/common';
import {TuiCardMedium, TuiHeader} from '@taiga-ui/layout';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {combineLatest, combineLatestAll, filter, Observable, switchMap, tap} from 'rxjs';
import {TuiAppearance, TuiButton, TuiLoader} from '@taiga-ui/core';
import {RouterLink} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader.service';
import {TuiLet} from '@taiga-ui/cdk';
import {Project} from '../../../core/models';

@Component({
  selector: 'app-project',
  imports: [
    AsyncPipe,
    TuiButton,
    RouterLink,
    TuiCardMedium,
    TuiAppearance,
    TuiLet,
    TuiLoader,
    TuiHeader
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoaderService]
})
export class ProjectComponent {
  readonly projectId = input<string>();

  private readonly projectService = inject(ProjectsService);
  public readonly loader = inject(LoaderService);

  public project$: Observable<Array<Project>> = combineLatest(
    toObservable(this.projectId),
    this.loader.loading$
  ).pipe(
    filter(([id, loading]) => Boolean(id && loading)),
    switchMap(([id]) => this.projectService.getProject(id as string)),
    tap(() => this.loader.toggle(false)),
    takeUntilDestroyed(),
  );

  constructor() {
    this.loader.toggle(true);
  }
}
