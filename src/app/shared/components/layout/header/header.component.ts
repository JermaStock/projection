import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {AuthStorageService} from '../../../../core/auth/services/auth-storage.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TuiTitle,
    TuiButton,
    AsyncPipe,
    TuiIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public authStorage = inject(AuthStorageService);
  private router = inject(Router);

  constructor() {
    this.authStorage.actualizeTokenState();
  }

  logOut(): void {
    this.authStorage.remove();
    this.router.navigate(['./auth/sign-in']);
  }
}
