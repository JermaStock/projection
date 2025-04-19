import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {TuiHeader} from '@taiga-ui/layout';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {AuthStorageService} from '../../../../core/auth/services/auth-storage.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TuiTitle,
    TuiButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly authStorage = inject(AuthStorageService);
  public logOut$ = computed<boolean>(() => !!this.authStorage.get());
}
