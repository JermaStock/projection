import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
