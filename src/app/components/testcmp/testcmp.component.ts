import { Component } from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-testcmp',
  imports: [
    TuiButton,
    RouterLink
  ],
  templateUrl: './testcmp.component.html',
  styleUrl: './testcmp.component.scss',
  standalone: true,
})
export class TestcmpComponent {

}
