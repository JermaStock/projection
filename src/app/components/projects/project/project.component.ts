import {Component, inject, input} from '@angular/core';
import {Project, ProjectsService} from '../../../services/projects.service';
import {AsyncPipe} from '@angular/common';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {async, Observable} from 'rxjs';
import {TuiAppearance, TuiButton} from '@taiga-ui/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [
    AsyncPipe,
    TuiHeader,
    TuiButton,
    RouterLink,
    TuiCardMedium,
    TuiAppearance
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone: true,
})
export class ProjectComponent {
  readonly projectId = input<string>();

  private readonly projectService = inject(ProjectsService);

  public project$: Observable<Array<Project>>;

  constructor() {
    toObservable(this.projectId).pipe(takeUntilDestroyed()).subscribe(id =>
      this.project$ = this.projectService.getProject(id)
    );
  }

  protected readonly async = async;
}
