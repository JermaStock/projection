import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {Project, ProjectsService} from '../../../services/projects.service';
import {AsyncPipe} from '@angular/common';
import {TuiCardMedium, TuiHeader} from '@taiga-ui/layout';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {Observable, switchMap, tap} from 'rxjs';
import {TuiAppearance, TuiButton, TuiLoader} from '@taiga-ui/core';
import {RouterLink} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {TuiLet} from '@taiga-ui/cdk';

@Component({
  selector: 'app-project',
  imports: [
    AsyncPipe,
    TuiHeader,
    TuiButton,
    RouterLink,
    TuiCardMedium,
    TuiAppearance,
    TuiLet,
    TuiLoader
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: LoaderService,
    useClass: LoaderService,
  }]
})
export class ProjectComponent {
  readonly projectId = input<string>();

  private readonly projectService = inject(ProjectsService);
  private readonly loader = inject(LoaderService);

  public project$: Observable<Array<Project>>;
  public loading$ = this.loader.loading$;

  constructor() {
    this.project$ = toObservable(this.projectId).pipe(
      switchMap(id => this.projectService.getProject(id)),
      tap(() => this.loader.toggle(false)),
      takeUntilDestroyed(),
    );
  }
}
