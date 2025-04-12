import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiHeader} from '@taiga-ui/layout';
import {RouterLink} from '@angular/router';
import {TuiTitle} from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TuiTitle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
