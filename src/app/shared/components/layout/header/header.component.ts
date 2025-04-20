import {ChangeDetectionStrategy, Component, computed, effect, inject, signal} from '@angular/core';
import {TuiHeader} from '@taiga-ui/layout';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {AuthStorageService} from '../../../../core/auth/services/auth-storage.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TuiTitle,
    TuiButton,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly authStorage = inject(AuthStorageService);
  private router = inject(Router);

  logOut(): void {
    this.authStorage.remove();
    this.router.navigate(['./auth/sign-in']);
  }
}
