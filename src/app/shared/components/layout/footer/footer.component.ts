import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import {ProjectsService} from '../../../../pages/projects/services/projects.service';
import {filter, map, Subject, switchMap, tap} from 'rxjs';
import {AuthStorageService} from '../../../../core/auth/services/auth-storage.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    TuiLink,
    AsyncPipe,
    TuiIcon,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private projectsService = inject(ProjectsService);
  private authStorage = inject(AuthStorageService);

  public readonly projectVersion$ = this.projectsService.getVersion().pipe(
    map(res => res.message),
  );

  constructor() {
    this.authStorage.tokenState$.pipe(
      filter(Boolean),
      switchMap(() => this.projectVersion$),
    )
  }

}
