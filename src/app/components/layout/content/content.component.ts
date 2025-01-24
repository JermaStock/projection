import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {

}
