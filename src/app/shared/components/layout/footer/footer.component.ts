import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
  selector: 'app-footer',
  imports: [
    TuiLink,
    TuiHeader
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
